import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Search } from 'src/app/search/state/search.model';

@Component({
  selector: 'app-user-not-found',
  templateUrl: './user-not-found.component.html',
  styleUrls: ['./user-not-found.component.scss']
})
export class UserNotFoundComponent {

  @Input() users: Search[];
  @Output() applyAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFaviourite(user) {
    this.applyAction.emit({ type: 'toggleFaviourite', data: user });
  }
  
  viewDetails(user) {
    this.applyAction.emit({ type: 'navigateToDetails', data: user });
  }

}
