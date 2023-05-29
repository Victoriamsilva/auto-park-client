import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  baseUrl = environment.historyApi;

  constructor(private http: HttpService, private router: Router) {}

  async getVehiclesParked() {
    return this.http.get(`${this.baseUrl}/history/parked`);
  }
}
