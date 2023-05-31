import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  historyApi = environment.historyApi;
  baseUrl = environment.api;
  eventsApi = environment.eventsApi;

  constructor(private http: HttpService) {}

  async getVehiclesParked() {
    return this.http.get(`${this.historyApi}/history/parked`);
  }

  async getVehiclesByClientId(clientId: string) {
    return this.http.get(`${this.baseUrl}/vehicles/${clientId}`);
  }

  async createVehicle(data: any) {
    return this.http.post(`${this.eventsApi}/create-vehicle`, data);
  }

  async editVehicle(id: any, data: any) {
    return this.http.patch(`${this.baseUrl}/vehicles/${id}`, data);
  }

  async deleteVehicle(vehicleId: string) {
    return this.http.delete(`${this.baseUrl}/vehicles/${vehicleId}`);
  }
}
