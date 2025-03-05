import { Routes } from '@angular/router';
import { followersComponent } from './components/followers/followers.component';

export const routes: Routes = [
  { path: 'followers', component: followersComponent },
  { path: '', redirectTo: '/followers', pathMatch: 'full' },
  { path: '**', redirectTo: '/followers' }
];
