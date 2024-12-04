import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion-de-propuesta',
  templateUrl: './creacion-de-propuesta.component.html',
  styleUrls: ['./creacion-de-propuesta.component.css']
})
export class CreacionDePropuestaComponent {

  // Variables para controlar el estado del dropdown y el área seleccionada
  isDropdownOpen = false;
  selectedArea: string | null = null;  // Área seleccionada por el usuario

  // Opciones del dropdown
  areaOptions: string[] = [
    'Áreas TI', 'Áreas de limpieza', 'Áreas de marketing', 'Áreas de finanza y contabilidad',
    'Área de soporte', 'Área de recursos humanos', 'Área de administración',
    'Área operacional', 'Área de mantención', 'Área de seguridad de cámaras', 'Área guardias'
  ];

  constructor(private router: Router) {}

  // Navegar al registro
  goToPropuestaCreada() {
    this.router.navigate(['/listadoPostulaciones']);
  }

  // Método para alternar la visibilidad del dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Método para seleccionar un área y cerrar el dropdown
  selectArea(area: string) {
    this.selectedArea = area;  // Actualiza el área seleccionada
    this.isDropdownOpen = false;  // Cierra el dropdown
  }
}
