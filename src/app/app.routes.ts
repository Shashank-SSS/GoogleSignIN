import { Routes } from '@angular/router';
import { LoginComponent } from './components/login';
import { WelcomeComponent } from './pages/welcome';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent }
];
