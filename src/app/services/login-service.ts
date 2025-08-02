import { Injectable } from '@angular/core';
import { Login } from '../pages/login/login';
import { LoginResponse } from '../types/login-response.type';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(name: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('/login', { name, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.name);
        }),
      );
  }
}
