import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ModalCreateVehicleComponent } from './client-info/modal-create-vehicle/modal-create-vehicle.component';
import { ModalRemoveVehicleComponent } from './client-info/modal-remove-vehicle/modal-remove-vehicle.component';
import { ModalEditVehicleComponent } from './client-info/modal-edit-vehicle/modal-edit-vehicle.component';
import { TabsComponent } from './client-info/tabs/tabs.component';
import { TabItemComponent } from './client-info/tab-item/tab-item.component';

@NgModule({
  declarations: [ClientsComponent, ClientInfoComponent, ModalCreateVehicleComponent, ModalRemoveVehicleComponent, ModalEditVehicleComponent, TabsComponent, TabItemComponent],
  imports: [CommonModule, ClientsRoutingModule, SharedModule],
})
export class ClientsModule {}
