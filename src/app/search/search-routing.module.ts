import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const searchRoutes = [
    {
        path: '',
        component: SearchComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(searchRoutes)
    ],
    exports: [RouterModule]
})
export class SearchRoutingModule {}
