import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  items = Array.from({ length: 100 }, (_, i) => ({
    titulo: `Propuesta ${i + 1}`,
    exp: Math.floor(Math.random() * 4) + 1, // Años de experiencia aleatorios entre 1 y 4
    jornada: ['Diurna', 'Nocturna', 'Mixta'][Math.floor(Math.random() * 3)],
    area: ['Áreas TI', 'Áreas de limpieza', 'Áreas marketing', 'Áreas de finanza y contabilidad',
           'Área de soporte', 'Área de recursos humanos', 'Área de administración',
           'Área operacional', 'Área de mantención', 'Área de seguridad de cámaras', 
           'Área guardias'][Math.floor(Math.random() * 10)],
    disponibilidad: ['Inmediata', 'urgente'][Math.floor(Math.random() * 2)]
  })); // 100 items de ejemplo

  pagedItems: any[] = []; // Items que se muestran en la página actual
  filteredItems: any[] = []; // Items después de aplicar el filtro
  filters = {
    exp: '', // Cambiado a string vacío
    jornada: '',
    area: '',
    disponibilidad: '',
  }; // Objeto para filtros

  page = 1; // Página inicial
  itemsPerPage = 9; // Número de cards por página

  // Opciones para los filtros
  experienceOptions = Array.from({ length: 4 }, (_, i) => i + 1); // 1 to 4
  jornadaOptions = ['Diurna', 'Nocturna', 'Mixta'];
  areaOptions = ['Áreas TI', 'Áreas de limpieza', 'Áreas marketing', 'Áreas de finanza y contabilidad',
                 'Área de soporte', 'Área de recursos humanos', 'Área de administración',
                 'Área operacional', 'Área de mantención', 'Área de seguridad de cámaras', 
                 'Área guardias'];
  disponibilidadOptions = ['Inmediata', 'Diferida'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredItems = this.items; // Inicializa con todos los items
    this.setPage(0); // Inicializa con la primera página (índice 0)
  }

  // Actualizar los items a mostrar según la página
  setPage(pageIndex: number) {
    const startIndex = pageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.filteredItems.slice(startIndex, endIndex);
  }

  // Manejar el cambio de página
  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize; // Cambia el tamaño de la página si el usuario lo modifica
    this.setPage(event.pageIndex); // Actualiza la página actual
  }

  // Aplicar los filtros
  applyFilters() {
    this.filteredItems = this.items.filter(item => {
      return (
        (this.filters.exp === '' || item.exp === +this.filters.exp) &&
        (this.filters.jornada === '' || item.jornada.toLowerCase().includes(this.filters.jornada.toLowerCase())) &&
        (this.filters.area === '' || item.area.toLowerCase().includes(this.filters.area.toLowerCase())) &&
        (this.filters.disponibilidad === '' || item.disponibilidad.toLowerCase().includes(this.filters.disponibilidad.toLowerCase()))
      );
    });

    this.setPage(0); // Reinicia a la primera página después de filtrar
  }

  // Navegar al login
  goToPropuestaTrabajo() {
    this.router.navigate(['/propuestaTrabajo']);
  }

  // Método para restablecer filtros a valores predeterminados
  resetFilters() {
    this.filters = {
      exp: '',
      jornada: '',
      area: '',
      disponibilidad: '',
    };
    this.filteredItems = this.items; // Restablece a todos los items
    this.setPage(0); // Reinicia a la primera página
  }
}
