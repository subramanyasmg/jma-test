import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HistoryModule { }
