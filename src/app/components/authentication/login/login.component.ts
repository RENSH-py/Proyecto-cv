import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service'; // Asegúrate de que el servicio esté creado correctamente

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  enviarFormulario(): void {
    if (this.myForm.invalid) {
      return;
    }

    const { username, password } = this.myForm.value;

    this.authService.login(username, password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token); // Guardamos el token en el almacenamiento local
        this.redirectBasedOnRole(response.role); // Redirigimos según el rol
      },
      (error) => {
        this.loginError = true; // Si hay un error, mostramos el mensaje de error
      }
    );
  }

  redirectBasedOnRole(role: string): void {
    if (role === 'superadmin') {
      this.router.navigate(['/panelAdminSuperUser']);
    } else if (role === 'admin') {
      this.router.navigate(['/panelAdmin']);
    }
  }
}
