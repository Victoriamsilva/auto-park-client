import { Component } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  vehiclesParked: any[] = [];

  constructor(private vehiclesService: VehiclesService) {}

  async ngOnInit() {
    const res: any = await this.vehiclesService.getVehiclesParked();
    this.vehiclesParked = res;
  }

  getBeginHour(date: string) {
    return moment(date).subtract(3, 'hours').format('HH:mm');
  }

  getBeginDate(date: Date) {
    return moment(date).format('DD/MM/YYYY');
  }

  getPricing(date: Date, priceHour: number) {
    const beginDate = moment(date);
    const endDate = moment();
    const duration = moment
      .duration(endDate.diff(beginDate))
      .add(3, 'hours')
      .asHours();
    console.log(duration);

    console.log(duration);
    const price = duration * priceHour;
    return price.toFixed(2);
  }
}
