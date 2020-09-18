import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilterComponent} from './component/filter/filter.component';
import {UsersContainerComponent} from './component/users-container/users-container.component';
import {UserLayoutComponent} from './component/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersContainerComponent
  },
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
  },
  {
    path: 'users/:id',
    component: UserLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
