import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilterComponent} from './filter/filter.component';

const routes: Routes = [
  {
    path: 'users/firstName/:firstName',
    component: FilterComponent
  },
  {
    path: 'users/lastName/:lastName',
    component: FilterComponent
  },
  {
    path: 'users/age/:age',
    component: FilterComponent
  },
  {
    path: 'users/city/:city',
    component: FilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
