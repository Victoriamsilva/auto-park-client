import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'entrance', loadChildren: () => import('./pages/entrance/entrance.module').then(m => m.EntranceModule) }, { path: 'exit', loadChildren: () => import('./pages/exit/exit.module').then(m => m.ExitModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
