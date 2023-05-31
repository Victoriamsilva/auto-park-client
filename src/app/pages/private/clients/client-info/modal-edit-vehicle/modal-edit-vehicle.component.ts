import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TypesService } from 'src/app/services/types.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-edit-vehicle',
  templateUrl: './modal-edit-vehicle.component.html',
  styleUrls: ['./modal-edit-vehicle.component.scss'],
})
export class ModalEditVehicleComponent {
  @Input() client: any;
  @Input() vehicle: any;
  @Output() onEdit = new EventEmitter();
  form: any;
  types: any[] = [];

  get name() {
    return this.form.get('name');
  }

  get licensePlate() {
    return this.form.get('licensePlate');
  }

  get vehicleTypeId() {
    return this.form.get('vehicleTypeId');
  }

  constructor(
    private vehiclesService: VehiclesService,
    private modalRef: BsModalRef,
    private typesService: TypesService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      licensePlate: new FormControl('', [Validators.required]),
      vehicleTypeId: new FormControl('', [Validators.required]),
    });
  }

  async editVehicle() {
    try {
      await this.vehiclesService.editVehicle(this.vehicle.id, {
        name: this.form.value.name,
        licensePlate: this.form.value.licensePlate,
        type: {
          id: this.form.value.vehicleTypeId,
        },
      });

      this.toastr.success('Veículo editado com sucesso', 'Sucesso!');
      this.onEdit.emit();
      this.closeModal();
    } catch (error) {
      this.toastr.error('Erro ao editar veículo', 'Erro!');
    }
  }

  async ngOnInit() {
    await this.getTypes();
    console.log(this.vehicle);

    this.form.patchValue({
      ...this.vehicle,
      vehicleTypeId: this.vehicle.type.id,
    });
  }

  async getTypes() {
    try {
      const res: any = await this.typesService.getTypes();
      this.types = res;
    } catch (error) {
      this.toastr.error('Erro ao listar tipos de veículos', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
