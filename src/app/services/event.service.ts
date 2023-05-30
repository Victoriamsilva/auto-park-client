import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  baseUrl = environment.eventsApi;

  constructor(private http: HttpService) {}

  async createClient(client: any) {
    return this.http.post(`${this.baseUrl}/create-client`, client);
  }
}
