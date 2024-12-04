import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-cv-recibidos',
  templateUrl: './area-cv-recibidos.component.html',
  styleUrl: './area-cv-recibidos.component.css'
})
export class AreaCvRecibidosComponent {

  constructor(private router : Router){}

  goTocv() {
    this.router.navigate(['/vistaCvRecibido']);
  }

}
