import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'FormularioContactoComponent',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  postulacionForm: FormGroup;

  comunas = [
    'Santiago', 'Providencia', 'Las Condes', 'Vitacura', 'La Reina', 'Ñuñoa',
    'Peñalolén', 'Macul', 'La Florida', 'Puente Alto', 'San Joaquín',
    'San Miguel', 'La Cisterna', 'El Bosque', 'Lo Espejo',
    'Pedro Aguirre Cerda', 'Cerrillos', 'Estación Central', 'Maipú',
    'Pudahuel', 'Lo Prado', 'Quinta Normal', 'Renca', 'Cerro Navia',
    'Independencia', 'Recoleta', 'Huechuraba', 'Conchalí', 'Quilicura',
    'San Bernardo', 'La Granja', 'Lo Barnechea'
  ];

  constructor(private router : Router, private fb: FormBuilder) {
    this.postulacionForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cv: ['', Validators.required],
      rut: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      comuna: ['', Validators.required],
      genero: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }
  goTofinPostulacion() {
    this.router.navigate(['/finPostulacion']);
  }


  onSubmit() {
    if (this.postulacionForm.valid) {
      console.log(this.postulacionForm.value);
    }
  }
}