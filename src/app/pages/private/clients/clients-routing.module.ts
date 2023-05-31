import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientInfoComponent } from './client-info/client-info.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
  {
    path: ':id',
    component: ClientInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
