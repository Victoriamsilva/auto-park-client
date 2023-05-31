import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TypesService } from 'src/app/services/types.service';
import { CreateTypeComponent } from './create-type/create-type.component';
import { ToastrService } from 'ngx-toastr';
import { RemoveTypeComponent } from './remove-type/remove-type.component';
import { EditTypeComponent } from './edit-type/edit-type.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  types: any[] = [];

  constructor(
    private typesService: TypesService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    await this.getTypes();
  }

  async getTypes() {
    try {
      const res: any = await this.typesService.getTypes();
      this.types = res;
    } catch (error) {
      this.toastr.error('Erro ao buscar tipos de veículos', 'Erro!');
    }
  }

  openModalEdit(type: any) {
    const modalRef = this.modalService.show(EditTypeComponent, {
      class: 'custom-modal-sm',
      initialState: { type },
    });
    modalRef.content?.onEdit.subscribe(() => {
      this.getTypes();
    });
  }

  openModalDelete(type: any) {
    const modalRef = this.modalService.show(RemoveTypeComponent, {
      class: 'custom-modal-sm',
      initialState: {
        type,
      },
    });
    modalRef.content?.onRemove.subscribe(() => {
      this.getTypes();
    });
  }

  openModal() {
    const modalRef = this.modalService.show(CreateTypeComponent, {
      class: 'custom-modal-sm',
    });
    modalRef.content?.onEdit.subscribe(() => {
      this.getTypes();
    });
  }
}
