import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-modal-remove-client',
  templateUrl: './modal-remove-client.component.html',
  styleUrls: ['./modal-remove-client.component.scss'],
})
export class ModalRemoveClientComponent {
  @Input() data: any = {};

  constructor(
    private clientsService: ClientsService,
    private modalRef: BsModalRef,
    private toastr: ToastrService
  ) {}

  async removeClient() {
    try {
      const res: any = await this.clientsService.removeClient(this.data.id);
      this.toastr.success('Cliente removido', 'Sucesso!');
      this.closeModal();
    } catch (error) {
      this.toastr.error('Erro ao remover cliente', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
