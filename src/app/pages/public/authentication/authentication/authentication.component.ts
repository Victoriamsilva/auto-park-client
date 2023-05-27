import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  form: any;

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('victoria@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('12345', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  async login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    try {
      await this.authService.login(this.email.value, this.password.value);
    } catch (error) {
      console.log(error);
    }
  }
}
