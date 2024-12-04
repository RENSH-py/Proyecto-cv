import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Verifica si el usuario está logueado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Verifica si el token está presente
  }

  // Cierra sesión eliminando el token
  logout(): void {
    localStorage.removeItem('token');
  }
}