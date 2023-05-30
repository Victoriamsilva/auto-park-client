import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  baseUrl = environment.api;

  constructor(private http: HttpService) {}

  async getTypes() {
    return this.http.get(`${this.baseUrl}/types`);
  }

  async createType(type: any) {
    return this.http.post(`${this.baseUrl}/types`, type);
  }
}
