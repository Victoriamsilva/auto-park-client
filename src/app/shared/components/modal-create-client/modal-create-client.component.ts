import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
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

  constructor(
    private clientsService: ClientsService,
    private vehiclesService: VehiclesService,
    private typesService: TypesService,
    private eventService: EventService,
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, Validators.email]),
      vehicleName: new FormControl('', [Validators.required]),
      vehicleType: new FormControl('', [Validators.required]),
      licensePlate: new FormControl('', [Validators.required]),
    });
  }

  async createClient() {
    const res: any = await this.eventService.createClient({});
  }

  async ngOnInit() {
    const res: any = await this.typesService.getTypes();
    this.types = res;
  }

  closeModal() {
    this.modalRef.hide();
  }
}
