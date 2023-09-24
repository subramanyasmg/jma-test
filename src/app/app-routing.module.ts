import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '/search', pathMatch: 'full' },
{ path: 'search', loadChildren: () => import('../app/search/search.module').then(m => m.SearchModule) },
{ path: 'history',
      loadChildren: () => import('../app/history/history.module').then(m => m.HistoryModule)},
{ path: 'details',
      loadChildren: () => import('../app/user-details/user-details.module').then(m => m.UserDetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
