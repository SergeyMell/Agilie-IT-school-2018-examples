import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {MenuComponent} from './menu/menu.component';
import {AuthComponent} from './auth-component/auth.component';
import {FormExampleComponent} from './forms/form-example.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'form', component: FormExampleComponent},
  {
    path: '', component: MenuComponent, children: [
      {path: 'settings', component: SettingsComponent},
    ]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: ':provider/auth', component: AuthComponent}
];
