import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: any) {
    return lastValueFrom(this.http.get(url, options)).catch((reason: any) =>
      Promise.reject(reason)
    );
  }

  post(url: string, body: any, options?: any) {
    return lastValueFrom(this.http.post(url, body, options)).catch(
      (reason: any) => Promise.reject(reason)
    );
  }

  put(url: string, body: any, options?: any) {
    return lastValueFrom(this.http.put(url, body, options)).catch(
      (reason: any) => Promise.reject(reason)
    );
  }

  patch(url: string, body: any, options?: any) {
    return lastValueFrom(this.http.patch(url, body, options)).catch(
      (reason: any) => Promise.reject(reason)
    );
  }

  delete(url: string, options?: any) {
    return lastValueFrom(this.http.delete(url, options)).catch((reason: any) =>
      Promise.reject(reason)
    );
  }
}
