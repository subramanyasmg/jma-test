import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from 'src/app/search/state/search.model';
import { SearchQuery } from 'src/app/search/state/search.query';
import { SearchStore } from 'src/app/search/state/search.store';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  
  user$: Observable<any>;

  constructor(
    private searchStore: SearchStore,
    private searchQuery: SearchQuery) { }

  ngOnInit(): void {
    this.user$ = this.searchQuery.selectActive();
  }

  toggleFaviourite(user: Search) {
    this.searchStore.update(user.id, { isFaviourite: !user.isFaviourite });
  }
}
