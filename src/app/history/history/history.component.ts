import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { Search } from 'src/app/search/state/search.model';
import { SearchQuery } from 'src/app/search/state/search.query';
import { SearchStore } from 'src/app/search/state/search.store';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  gitHubUser$: Observable<Search[]>;
  displayedColumns: string[] = ['name', 'success', 'faviourite','view'];
  sortBy$ = 'asc';

  constructor(
    @Inject('persistStorage') private persistStorage,
    public searchQuery: SearchQuery,
    public searchStore: SearchStore,
    public router: Router
    ) {
    this.gitHubUser$ = this.searchQuery.selectAll();
  }

  sortBy(sortByKey: any) {
    let order;
    if(/^asc$/i.test(this.sortBy$)) {
      order = Order.ASC;
      this.sortBy$ = 'desc';
    } else {
      order = Order.DESC;
      this.sortBy$ = 'asc';
    }
    
    this.gitHubUser$ = this.searchQuery.selectAll({
      sortByOrder: order,
      sortBy: sortByKey
    })
  }

  clearHistory() {
    if(confirm("Are you sure to clear history?")) {
      localStorage.removeItem('Subramanya');
      this.searchStore.set([]);
      this.persistStorage.clearStore('Subramanya');
      this.persistStorage.clearStore();
    }
  }

  viewDetails(user) {
    this.searchStore.setActive(user.id);
    this.router.navigateByUrl('details');
  }

}
