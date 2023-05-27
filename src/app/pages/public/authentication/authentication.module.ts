import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    ForgotPasswordComponent,
    AuthenticationLayoutComponent,
  ],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}
