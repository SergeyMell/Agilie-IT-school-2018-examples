import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes.rb';
import {MenuComponent} from './menu/menu.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from './interceptors/header.interceptor';
import {DubInterceptor} from './interceptors/dub.interceptor';
import {MyPipe} from './pipes/some.pipe';
import {AuthComponent} from './auth-component/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RepeaterDirective} from './directives/repeater.directive';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    MenuComponent,
    MyPipe,
    AuthComponent,
    RepeaterDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: DubInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
