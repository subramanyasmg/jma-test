import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const userDetailsRoutes = [
    {
        path: '',
        component: UserDetailsComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(userDetailsRoutes)
    ],
    exports: [RouterModule]
})
export class UserDetailsRoutingModule {}
