import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { FilterComponent } from './component/filter/filter.component';
import { UsersContainerComponent } from './component/users-container/users-container.component';
import {HttpClientModule} from '@angular/common/http';
import { UserLayoutComponent } from './component/user-layout/user-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FilterComponent,
    UsersContainerComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
