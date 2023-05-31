import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { EventService } from 'src/app/services/event.service';
import { TypesService } from 'src/app/services/types.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-create-client',
  templateUrl: './modal-create-client.component.html',
  styleUrls: ['./modal-create-client.component.scss'],
})
export class ModalCreateClientComponent {
  @Output() onCreate = new EventEmitter();
  types: any[] = [];
  form: any;

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('name');
  }

  get cpf() {
    return this.form.get('cpf');
  }

  get vehicleName() {
    return this.form.get('vehicleName');
  }

  get vehicleType() {
    return this.form.get('vehicleType');
  }

  get licensePlate() {
    return this.form.get('licensePlate');
  }

  get isParked() {
    return this.form.get('isParked');
  }

  constructor(
    private typesService: TypesService,
    private eventService: EventService,
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required]),
      vehicleName: new FormControl('', [Validators.required]),
      vehicleType: new FormControl('', [Validators.required]),
      licensePlate: new FormControl('', [Validators.required]),
      isParked: new FormControl(false),
    });
  }

  async createClient() {
    try {
      const client = {
        name: this.name.value,
        email: this.email.value,
        cpf: this.cpf.value,
      };

      const vehicle = {
        name: this.vehicleName.value,
        type: {
          id: this.vehicleType.value,
        },
        licensePlate: this.licensePlate.value,
      };

      const res: any = await this.eventService.createClient({
        client,
        vehicle,
        createHistory: this.isParked.value,
      });

      if (res) {
        this.closeModal();
        this.onCreate.emit();
        this.toastr.success('Cliente criado', 'Sucesso!');
      }
    } catch (error) {
      this.toastr.error('Erro ao criar cliente', 'Erro!');
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
