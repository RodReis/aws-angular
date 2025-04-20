import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { MenuleftComponent } from './components/menuleft/menuleft.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menuleft',
    component: MenuleftComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [authGuard]
  }
];
