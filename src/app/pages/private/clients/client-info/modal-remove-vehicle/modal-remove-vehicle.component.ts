import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-remove-vehicle',
  templateUrl: './modal-remove-vehicle.component.html',
  styleUrls: ['./modal-remove-vehicle.component.scss'],
})
export class ModalRemoveVehicleComponent {
  @Input() vehicleId: any;
  @Output() onDelete = new EventEmitter();

  constructor(
    private vehiclesService: VehiclesService,
    private modalRef: BsModalRef,
    private toastr: ToastrService
  ) {}

  async removeVehicle() {
    try {
      await this.vehiclesService.deleteVehicle(this.vehicleId);
      this.toastr.success('Veículo removido com sucesso', 'Sucesso!');
      this.onDelete.emit();
      this.closeModal();
    } catch (error) {
      this.toastr.error('Erro ao remover veículo', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
