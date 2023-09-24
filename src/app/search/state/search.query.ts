import { Injectable } from '@angular/core';
import { SearchState, SearchStore  } from './search.store';
import { QueryEntity } from '@datorama/akita';


@Injectable({ providedIn: 'root' })
export class SearchQuery extends QueryEntity<SearchState> {
    constructor(protected store: SearchStore) {
        super(store);
    }
}

