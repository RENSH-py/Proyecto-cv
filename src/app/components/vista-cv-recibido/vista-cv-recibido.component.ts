import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vista-cv-recibido',
  templateUrl: './vista-cv-recibido.component.html',
  styleUrl: './vista-cv-recibido.component.css'
})
export class VistaCvRecibidoComponent {

  constructor (private router: Router) {}

  goToDetalle() {
    this.router.navigate(['/revisionPostulante']);
  }

}
