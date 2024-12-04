import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // importacion de servicio

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuActive: boolean = false; // Estado para el menú desplegable
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Verifica si el usuario está logueado
  }

  // Lógica para cerrar sesión
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false; // Actualiza el estado
    this.router.navigate(['/']); // Redirige a la página principal o a cualquier otra ruta
  }

  // Lógica para ir al login
  goToLogin(): void {
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
