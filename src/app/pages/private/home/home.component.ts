import { Component } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';
import * as moment from 'moment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalAddVehicleComponent } from 'src/app/shared/components/modal-add-vehicle/modal-add-vehicle.component';
import { ModalExitVehicleComponent } from 'src/app/shared/components/modal-exit-vehicle/modal-exit-vehicle.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  vehiclesParked: any[] = [];

  constructor(
    private vehiclesService: VehiclesService,
    private modalService: BsModalService
  ) {}

  async ngOnInit() {
    const res: any = await this.vehiclesService.getVehiclesParked();
    this.vehiclesParked = res;
  }

  getBeginHour(date: string) {
    return moment(date).format('HH:mm');
  }

  getBeginDate(date: Date) {
    return moment(date).format('DD/MM/YYYY');
  }

  getPricing(date: Date, priceHour: number) {
    const beginDate = moment(date);
    const endDate = moment();
    const duration = moment.duration(endDate.diff(beginDate)).asHours();
    const price = duration * priceHour;
    console.log(price);
    return price.toFixed(2);
  }

  openModal() {
    this.modalService.show(ModalAddVehicleComponent, {
      class: 'custom-modal-sm',
    });
  }

  async exitVehicle(vehicle: any) {
    console.log(vehicle);
    this.modalService.show(ModalExitVehicleComponent, {
      class: 'custom-modal-sm',
      initialState: {
        data: {
          begin: this.getBeginHour(vehicle.begin),
          time:
            this.getBeginHour(vehicle.begin) + ' - ' + moment().format('HH:mm'),
          ...vehicle,
        },
      },
    });
  }
}
