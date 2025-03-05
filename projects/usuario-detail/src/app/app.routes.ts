import { Routes } from '@angular/router';
import { usuariosDetailComponent } from './components/usuariosDetail/usuariosDetail.component';

export const routes: Routes = [
  { path: 'usuario-detail', component: usuariosDetailComponent },
  { path: '', redirectTo: '/usuario-detail', pathMatch: 'full' },
  { path: '**', redirectTo: '/usuario-detail' }
];
