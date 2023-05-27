import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

export const authenticationGuard = async () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  console.log(authService.isLoggedIn);

  if (!authService.isLoggedIn) {
    router.navigateByUrl('/authentication');
    alert('Você não está logado');
  }
  return authService.isLoggedIn;
};
