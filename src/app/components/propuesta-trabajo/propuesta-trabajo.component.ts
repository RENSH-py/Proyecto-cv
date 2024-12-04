import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propuesta-trabajo',
  templateUrl: './propuesta-trabajo.component.html',
  styleUrl: './propuesta-trabajo.component.css'
})
export class PropuestaTrabajoComponent {
  constructor(private router: Router) {}

  // Navegar al login
  goToPostular() {
    this.router.navigate(['/formulario']);
  }

  // Navegar al registro
  goToMenuUser() {
    this.router.navigate(['/menuUser']);
  }

};
