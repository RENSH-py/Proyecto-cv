import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public myForm!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();

  }

  private createMyForm():FormGroup{
    return this.fb.group({
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      email:['',Validators.required],
      contraseña:['',Validators.required],
      direccion:['',Validators.required],
      telefono:['',Validators.required]
    });
  }

  public enviarFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }

    console.log(this.myForm.value);
  }

  public get f():any{
    return this.myForm.controls;
  }

}
