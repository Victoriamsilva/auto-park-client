import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-remove-type',
  templateUrl: './remove-type.component.html',
  styleUrls: ['./remove-type.component.scss'],
})
export class RemoveTypeComponent {
  @Input() type: any;
  @Output() onRemove = new EventEmitter();

  constructor(
    private typesService: TypesService,
    private modalRef: BsModalRef,
    private toastr: ToastrService
  ) {}

  async removeType() {
    try {
      await this.typesService.removeType(this.type.id);
      this.toastr.success('Tipo de veiculo removido', 'Sucesso!');
      this.closeModal();
      this.onRemove.emit();
    } catch (error) {
      this.toastr.error('Erro ao remover tipo de veículo', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
