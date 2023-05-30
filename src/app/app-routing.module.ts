import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [authenticationGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/private/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./pages/private/clients/clients.module').then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: 'vehicles',
        loadChildren: () =>
          import('./pages/private/vehicles/vehicles.module').then(
            (m) => m.VehiclesModule
          ),
      },
    ],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./pages/public/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
