import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userId = localStorage.getItem('userId');
  return true;
  if (userId !== null) {

  } else {
    router.navigate(['/login']) ;
    return false;
  }

};
