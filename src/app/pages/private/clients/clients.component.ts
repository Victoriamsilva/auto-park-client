import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { ModalCreateClientComponent } from 'src/app/shared/components/modal-create-client/modal-create-client.component';
import { ModalEditClientComponent } from 'src/app/shared/components/modal-edit-client/modal-edit-client.component';
import { ModalRemoveClientComponent } from 'src/app/shared/components/modal-remove-client/modal-remove-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  clients: any[] = [];

  constructor(
    private clientsService: ClientsService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.getClients();
  }

  async getClients() {
    try {
      const res: any = await this.clientsService.getClients();
      this.clients = res;
    } catch (error) {
      this.toastr.error('Erro ao listar clientes', 'Erro!');
    }
  }

  openModal() {
    const modalRef = this.modalService.show(ModalCreateClientComponent, {
      class: 'custom-modal-sm',
    });
    modalRef.content?.onCreate.subscribe(() => {
      this.getClients();
    });
  }

  redirectClientInfo(id: number) {
    this.router.navigateByUrl(`/clients/${id}`);
  }

  openModalEdit(client: any) {
    const modalRef = this.modalService.show(ModalEditClientComponent, {
      class: 'custom-modal-sm',
      initialState: {
        data: client,
      },
    });
    modalRef.content?.onEdit.subscribe(() => {
      this.getClients();
    });
  }

  openModalRemove(id: number) {
    const modalRef = this.modalService.show(ModalRemoveClientComponent, {
      class: 'custom-modal-sm',
      initialState: {
        data: {
          id,
        },
      },
    });
    modalRef.content?.onRemove.subscribe(() => {
      this.getClients();
    });
  }
}
