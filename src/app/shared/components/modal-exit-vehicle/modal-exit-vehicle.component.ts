import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-modal-exit-vehicle',
  templateUrl: './modal-exit-vehicle.component.html',
  styleUrls: ['./modal-exit-vehicle.component.scss'],
})
export class ModalExitVehicleComponent {
  @Input() data: any = {};

  constructor(
    private historyService: HistoryService,
    private modalRef: BsModalRef
  ) {}

  getPricing() {
    const beginDate = moment(this.data.begin);
    const endDate = moment();
    const duration = moment.duration(endDate.diff(beginDate)).asHours();
    const price = duration * this.data.vehicle.type.price;
    console.log(price);
    return price.toFixed(2);
  }

  async exitVehicle() {
    const res: any = await this.historyService.exitVehicle(this.data.id, {
      end: new Date(),
      isPaid: true,
      price: this.getPricing(),
    });
    console.log(res);
    this.modalRef.hide();
  }

  closeModal() {
    this.modalRef.hide();
  }
}
