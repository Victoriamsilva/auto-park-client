import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  types: any[] = [];

  constructor(
    private typesService: TypesService,
    private modalService: BsModalService
  ) {}

  async ngOnInit() {
    const res: any = await this.typesService.getTypes();
    this.types = res;
  }

  openModal() {
    // this.modalService.show(ModalCreateClientComponent, {
    //   class: 'custom-modal-sm',
    // });
  }
}
