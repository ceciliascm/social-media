import { Component } from '@angular/core';
import {DefaultLoginLayout} from '../../components/default-login-layout/default-login-layout';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInput} from '../../components/primary-input/primary-input';
import {Router} from '@angular/router';
import {LoginResponse} from '../../types/login-response.type';
import {LoginService} from '../../services/login-service';
import {ToastrService} from 'ngx-toastr';

@Component({
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInput
  ],
  providers: [
    LoginService
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html'
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Login successfully"),
      error: () => this.toastService.error("Login failed.")
    })
  }

  /* navigate() {
    this.router.navigate(["/"signup])
  } */

}
