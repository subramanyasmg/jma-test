import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';

const historyRoutes = [
    {
        path: '',
        component: HistoryComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(historyRoutes)
    ],
    exports: [RouterModule]
})
export class HistoryRoutingModule {}
