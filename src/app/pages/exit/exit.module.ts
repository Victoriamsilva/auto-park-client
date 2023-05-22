import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExitRoutingModule } from './exit-routing.module';
import { ExitComponent } from './exit.component';


@NgModule({
  declarations: [
    ExitComponent
  ],
  imports: [
    CommonModule,
    ExitRoutingModule
  ]
})
export class ExitModule { }
