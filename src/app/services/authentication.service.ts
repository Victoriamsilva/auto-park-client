import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.authApi;

  get isLoggedIn() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  constructor(private http: HttpService, private router: Router) {}

  async login(email: string, password: string) {
    const data: any = await this.http.post(`${this.baseUrl}/login`, {
      email,
      password,
    });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    console.log('aaaaaa', this.isLoggedIn);
    this.router.navigateByUrl('/entrance');
  }

  logout() {
    this.router.navigateByUrl('/authentication');
    localStorage.clear();
  }
}
