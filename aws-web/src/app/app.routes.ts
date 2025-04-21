import { LayoutComponent } from './components/layout/layout.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { MenuleftComponent } from './components/menuleft/menuleft.component';
import { UserComponent } from './components/user/user.component';


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
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        //canActivate: [authGuard]
      },
      {
        path: 'usuarios',
        component: UserComponent,
        //canActivate: [authGuard]
      }
    ]
  },

];
