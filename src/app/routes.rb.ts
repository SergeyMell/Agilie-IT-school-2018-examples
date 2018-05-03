import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {MenuComponent} from './menu/menu.component';
import {AuthComponent} from './auth-component/auth.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {
    path: '', component: MenuComponent, children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
    ]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: ':provider/auth', component: AuthComponent}
];
