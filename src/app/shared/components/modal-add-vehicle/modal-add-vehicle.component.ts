import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ClientsService } from 'src/app/services/clients.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-add-vehicle',
  templateUrl: './modal-add-vehicle.component.html',
  styleUrls: ['./modal-add-vehicle.component.scss'],
})
export class ModalAddVehicleComponent {
  clients: any[] = [];
  vehicles: any[] = [];
  selectedClient: any = null;
  selectedVehicle: any = null;

  constructor(
    private clientsService: ClientsService,
    private vehiclesService: VehiclesService,
    private modalRef: BsModalRef
  ) {}

  async ngOnInit() {
    const clients: any = await this.clientsService.getClients();
    this.clients = clients;
    return clients;
  }

  async searchClients(search?: string) {
    const clients: any = await this.clientsService.getClients(search);
    this.clients = clients;
    return clients;
  }

  async getVehicles() {
    if (this.selectedClient) {
      const vehicles: any = await this.vehiclesService.getVehiclesByClientId(
        this.selectedClient
      );
      this.vehicles = vehicles;
      return vehicles;
    }

    this.vehicles = [];
    this.selectedVehicle = null;
  }

  async addVehicle() {
    if (this.selectedClient && this.selectedVehicle) {
      const res: any = await this.vehiclesService.addVehicle({
        client: {
          id: this.selectedClient,
        },
        vehicle: {
          id: this.selectedVehicle,
        },
      });
      return res;
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
