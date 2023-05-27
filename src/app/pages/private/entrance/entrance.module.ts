import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceRoutingModule } from './entrance-routing.module';
import { EntranceComponent } from './entrance.component';


@NgModule({
  declarations: [
    EntranceComponent
  ],
  imports: [
    CommonModule,
    EntranceRoutingModule
  ]
})
export class EntranceModule { }
