import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateTypeComponent } from './create-type/create-type.component';
import { EditTypeComponent } from './edit-type/edit-type.component';
import { RemoveTypeComponent } from './remove-type/remove-type.component';

@NgModule({
  declarations: [VehiclesComponent, CreateTypeComponent, EditTypeComponent, RemoveTypeComponent],
  imports: [CommonModule, VehiclesRoutingModule, SharedModule],
})
export class VehiclesModule {}
