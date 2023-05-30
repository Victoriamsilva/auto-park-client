import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ModalAddVehicleComponent } from './components/modal-add-vehicle/modal-add-vehicle.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalCreateClientComponent } from './components/modal-create-client/modal-create-client.component';
import { ModalExitVehicleComponent } from './components/modal-exit-vehicle/modal-exit-vehicle.component';
import { ModalEditClientComponent } from './components/modal-edit-client/modal-edit-client.component';
import { ModalRemoveClientComponent } from './components/modal-remove-client/modal-remove-client.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    ModalAddVehicleComponent,
    ModalCreateClientComponent,
    ModalExitVehicleComponent,
    ModalEditClientComponent,
    ModalRemoveClientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
  ],
  exports: [
    CardComponent,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FormsModule,
    NgSelectModule,
  ],
})
export class SharedModule {}
