import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TypesService } from 'src/app/services/types.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-create-vehicle',
  templateUrl: './modal-create-vehicle.component.html',
  styleUrls: ['./modal-create-vehicle.component.scss'],
})
export class ModalCreateVehicleComponent {
  @Input() client: any;
  @Output() onCreate = new EventEmitter();
  form: any;
  types: any[] = [];

  get name() {
    return this.form.get('name');
  }

  get licensePlate() {
    return this.form.get('licensePlate');
  }

  get isParked() {
    return this.form.get('isParked');
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
      isParked: new FormControl(false),
      vehicleTypeId: new FormControl('', [Validators.required]),
    });
  }

  async createVehicle() {
    try {
      await this.vehiclesService.createVehicle({
        vehicle: {
          name: this.form.value.name,
          licensePlate: this.form.value.licensePlate,
          type: {
            id: this.form.value.vehicleTypeId,
          },
          client: {
            id: this.client.id,
          },
        },
        createHistory: this.form.value.isParked,
      });

      this.toastr.success('Veículo adicionado com sucesso', 'Sucesso!');
      this.onCreate.emit();
      this.closeModal();
    } catch (error) {
      this.toastr.error('Erro ao adicionar veículo', 'Erro!');
    }
  }

  async ngOnInit() {
    await this.getTypes();
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
