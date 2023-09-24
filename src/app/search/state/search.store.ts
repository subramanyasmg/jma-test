import { Injectable } from '@angular/core';
import { Search } from './search.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';


export interface SearchState extends EntityState<Search> {}

class SearchEntityStore extends EntityStore<SearchState> {

    constructor() {
        super();
    }

    addSearch(search: Search) {
        this.add(search, { prepend: true });
    }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'search', resettable: true })
export class SearchStore extends SearchEntityStore {
    constructor() {
        super();
    }
}