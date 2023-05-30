import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  historyApi = environment.historyApi;
  baseUrl = environment.api;
  eventsApi = environment.eventsApi;

  constructor(private http: HttpService, private router: Router) {}

  async getVehiclesParked() {
    return this.http.get(`${this.historyApi}/history/parked`);
  }

  async getVehiclesByClientId(clientId: string) {
    return this.http.get(`${this.baseUrl}/vehicles/${clientId}`);
  }

  async addVehicle(data: any) {
    return this.http.post(`${this.historyApi}/history`, data);
  }
}
