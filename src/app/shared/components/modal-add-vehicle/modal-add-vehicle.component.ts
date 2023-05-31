import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { HistoryService } from 'src/app/services/history.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-modal-add-vehicle',
  templateUrl: './modal-add-vehicle.component.html',
  styleUrls: ['./modal-add-vehicle.component.scss'],
})
export class ModalAddVehicleComponent {
  @Output() onCreate = new EventEmitter();
  clients: any[] = [];
  vehicles: any[] = [];
  selectedClient: any = null;
  selectedVehicle: any = null;

  constructor(
    private clientsService: ClientsService,
    private vehiclesService: VehiclesService,
    private historyService: HistoryService,
    private modalRef: BsModalRef,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    await this.getClients();
  }

  async getClients() {
    try {
      const clients: any = await this.clientsService.getClients();
      this.clients = clients;
    } catch (error) {
      this.toastr.error('Erro ao buscar clientes', 'Erro!');
    }
  }

  async searchClients(search?: string) {
    try {
      const clients: any = await this.clientsService.getClients(search);
      this.clients = clients;
      return clients;
    } catch (error) {}
  }

  async getVehicles() {
    try {
      if (this.selectedClient) {
        const vehicles: any = await this.vehiclesService.getVehiclesByClientId(
          this.selectedClient
        );
        this.vehicles = vehicles;
        return vehicles;
      }

      this.vehicles = [];
      this.selectedVehicle = null;
    } catch (error) {
      this.toastr.error('Erro ao buscar veículos', 'Erro!');
    }
  }

  async addVehicle() {
    try {
      if (this.selectedClient && this.selectedVehicle) {
        await this.historyService.entranceVehicle({
          client: {
            id: this.selectedClient,
          },
          vehicle: {
            id: this.selectedVehicle,
          },
        });
        this.toastr.success('Veículo adicionado com sucesso', 'Sucesso!');
        this.onCreate.emit();
        this.closeModal();
      }
    } catch (error) {
      this.toastr.error('Erro ao adicionar veículo', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
