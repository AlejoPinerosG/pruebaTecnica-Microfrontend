// filepath: /c:/Users/Alejandro/Documents/Prueba Técnica/workspace/projects/host/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('users/UsuariosComponent').then(c => c.UsuariosComponent)
  },
  {
    path: 'usuario-detail/:login',
    loadComponent: () =>
      import('usuarioDetail/usuariosDetailComponent').then(c => c.usuariosDetailComponent)
  },
  {
    path: 'followers/:login',
    loadComponent: () =>
      import('followers/followersComponent').then(c => c.followersComponent)
  },
  { path: '**',
    redirectTo: ''
  }
];
