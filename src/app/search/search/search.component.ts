import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Search } from '../state/search.model';
import { SearchQuery } from '../state/search.query';
import { SearchService } from '../state/search.service';
import { SearchStore } from '../state/search.store';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTextControl$ = new FormControl();
  searchTextSub: Subscription;
  debounce = 200;
  gitHubUser$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(
    private searchService: SearchService,
    public searchStore: SearchStore,
    public searchQuery: SearchQuery,
    public router: Router
  ) {
  }

  ngOnInit() {}
  

  searchUser() {
    const searchText = this.searchTextControl$.value;
    if (searchText.length > 2) {
      this.getGithubUser(searchText);
    }
  }

  getGithubUser(searchText: string): void {
    this.isLoading$ = this.searchQuery.selectLoading();
    this.searchService.getGithubUser(searchText)
      .subscribe((result) => {
        this.handleResult(result, 'success');
      }, (error) => {
        const data = {
          name: searchText
        };
        this.handleResult(data, 'error');
      });
  }

  handleResult(result, event) {
    let { id, login, avatar_url, blog, followers, following, location, public_repos } = result;
    let isSuccessful;
    const isFaviourite = false;

    if (event === 'error') {
      id = Math.random().toString(36).substr(2, 9);
      isSuccessful = false;
      login = result.name;
    } else {
      isSuccessful = true;
    }
    const isUserFound = this.searchQuery.getAll({ filterBy: a => a.name.toString() == result.name });

    if (isUserFound.length > 0) {
      this.gitHubUser$ = of(isUserFound);
    } else {
      this.searchStore.addSearch(
        {
          id,
          name: login,
          avatar_url, blog,
          followers, following,
          location, public_repos,
          isSuccessful,
          isFaviourite
        });
      this.gitHubUser$ = this.searchQuery.selectAll({ limitTo: 1, filterBy: a => a.name === login });
    }
  }

  toggleFaviourite(user: Search) {
    this.searchStore.update(user.id, { isFaviourite: !user.isFaviourite });
    this.gitHubUser$ = this.searchQuery.selectAll({ limitTo: 1, filterBy: a => a.id === user.id });
  }


  viewDetails(user: any) {
    this.searchStore.setActive(user.id);
    this.router.navigateByUrl('details');
  }

  /**
   * Apply page actions
   * 
   */
  applyAction({ type, data }): void {
    switch (type) {
      case 'toggleFaviourite': this.toggleFaviourite(data); break;
      case 'navigateToDetails': this.viewDetails(data); break;
    }
  }

}
