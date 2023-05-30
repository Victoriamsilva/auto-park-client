import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ClientsService } from 'src/app/services/clients.service';
import { ModalCreateClientComponent } from 'src/app/shared/components/modal-create-client/modal-create-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  clients: any[] = [];

  constructor(
    private clientsService: ClientsService,
    private modalService: BsModalService
  ) {}

  async ngOnInit() {
    const res: any = await this.clientsService.getClients();
    this.clients = res;
  }

  openModal() {
    this.modalService.show(ModalCreateClientComponent, {
      class: 'custom-modal-sm',
    });
  }
}
