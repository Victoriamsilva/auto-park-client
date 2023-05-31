import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  baseUrl = environment.historyApi;

  constructor(private http: HttpService) {}

  async exitVehicle(id: number, vehicle: any) {
    return this.http.patch(`${this.baseUrl}/history/${id}`, vehicle);
  }

  async entranceVehicle(data: any) {
    return this.http.post(`${this.baseUrl}/history`, data);
  }

  async getHistoryByClientId(id: number) {
    return this.http.get(`${this.baseUrl}/history/client/${id}`);
  }
}
