import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-modal-exit-vehicle',
  templateUrl: './modal-exit-vehicle.component.html',
  styleUrls: ['./modal-exit-vehicle.component.scss'],
})
export class ModalExitVehicleComponent {
  @Output() onExit = new EventEmitter();
  @Input() data: any = {};

  constructor(
    private historyService: HistoryService,
    private modalRef: BsModalRef,
    private toastr: ToastrService
  ) {}

  getPricing() {
    const beginDate = moment(this.data.begin);
    const endDate = moment();
    const duration = moment.duration(endDate.diff(beginDate)).asHours();
    const price = duration * this.data.vehicle.type.price;
    return price.toFixed(2);
  }

  async exitVehicle() {
    try {
      await this.historyService.exitVehicle(this.data.id, {
        end: new Date(),
        isPaid: true,
        price: this.getPricing(),
      });
      this.toastr.success(
        'Saída de veículo registrada com sucesso',
        'Sucesso!'
      );
      this.onExit.emit();
      this.closeModal();
    } catch (error) {
      this.toastr.error('Erro ao buscar veículos', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
