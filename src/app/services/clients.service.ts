import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  baseUrl = environment.api;

  constructor(private http: HttpService) {}

  async getClients(search?: string) {
    if (search) {
      return this.http.get(`${this.baseUrl}/clients?search=${search}`);
    }
    return this.http.get(`${this.baseUrl}/clients`);
  }

  async createClient(client: any) {
    return this.http.post(`${this.baseUrl}/clients`, client);
  }

  async editClient(client: any) {
    return this.http.patch(`${this.baseUrl}/clients/${client.id}`, client);
  }

  async removeClient(id: number) {
    return this.http.delete(`${this.baseUrl}/clients/${id}`);
  }
}
