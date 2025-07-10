import { Component } from '@angular/core';
import {DefaultLoginLayout} from '../../components/default-login-layout/default-login-layout';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html'
})
export class Login {
  loginForm!: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

}
