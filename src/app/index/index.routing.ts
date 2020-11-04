import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { RegisterComponent } from './register/register.component';

export const IndexRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
