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
}
