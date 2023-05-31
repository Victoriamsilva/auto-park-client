import { Component, Input } from '@angular/core';
import { ModalCreateVehicleComponent } from './modal-create-vehicle/modal-create-vehicle.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { ActivatedRoute } from '@angular/router';
import { ModalRemoveVehicleComponent } from './modal-remove-vehicle/modal-remove-vehicle.component';
import { ModalEditVehicleComponent } from './modal-edit-vehicle/modal-edit-vehicle.component';
import { ModalEditClientComponent } from 'src/app/shared/components/modal-edit-client/modal-edit-client.component';
import { HistoryService } from 'src/app/services/history.service';
import * as moment from 'moment';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent {
  client: any;
  historyClient: any[] = [];
  vehicles: any[] = [];

  constructor(
    private clientsService: ClientsService,
    private vehiclesService: VehiclesService,
    private historyService: HistoryService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.getClient(this.route.snapshot.params['id']);
  }

  async getHistory() {
    try {
      const res: any = await this.historyService.getHistoryByClientId(
        this.client.id
      );
      this.historyClient = res;
    } catch (error) {
      this.toastr.error('Erro ao buscar histórico do cliente', 'Erro!');
    }
  }

  async getClient(id: number) {
    try {
      const res: any = await this.clientsService.getClientById(id);
      this.client = res;
      await this.getVehicles();
      await this.getHistory();
    } catch (error) {
      console.log(error);
      this.toastr.error('Erro ao buscar informações do cliente', 'Erro!');
    }
  }

  getHour(date: Date) {
    return moment(date).format('HH:mm');
  }

  getDate(date: Date) {
    return moment(date).format('DD/MM/YYYY');
  }

  async getVehicles() {
    try {
      const res: any = await this.vehiclesService.getVehiclesByClientId(
        this.client.id
      );
      this.vehicles = res;
    } catch (error) {
      this.toastr.error('Erro ao listar clientes', 'Erro!');
    }
  }

  openModalEditClient() {
    const modalRef = this.modalService.show(ModalEditClientComponent, {
      class: 'custom-modal-sm',
      initialState: {
        data: this.client,
      },
    });
    modalRef.content?.onEdit.subscribe(() => {
      this.getClient(this.client.id);
    });
  }

  openModalEdit(vehicle: any) {
    const modalRef = this.modalService.show(ModalEditVehicleComponent, {
      class: 'custom-modal-sm',
      initialState: { client: this.client, vehicle },
    });
    modalRef.content?.onEdit.subscribe(() => {
      this.getVehicles();
    });
  }

  openModalDelete(vehicleId: number) {
    const modalRef = this.modalService.show(ModalRemoveVehicleComponent, {
      class: 'custom-modal-sm',
      initialState: { vehicleId },
    });
    modalRef.content?.onDelete.subscribe(() => {
      this.getVehicles();
    });
  }

  openModalCreateVehicle() {
    const modalRef = this.modalService.show(ModalCreateVehicleComponent, {
      class: 'custom-modal-sm',
      initialState: {
        client: this.client,
      },
    });
    modalRef.content?.onCreate.subscribe(() => {
      this.getVehicles();
    });
  }
}
