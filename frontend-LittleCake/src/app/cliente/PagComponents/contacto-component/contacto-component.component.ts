import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.css']
})
export class ContactoComponentComponent implements OnInit {
  urlCiudades='http://restcountries.eu/rest/v2/all';
  urlemail='http://localhost:3000/email';
  public listapaises:any =[]
  public form:FormGroup;
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  constructor(private restService:RestService, private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.cargarPaises();
    this.form = this.formBuilder.group({
      nombre:'',  
      apellido:'',
      edad:'',
      ciudad:'',
      correoElectronico:'',
      fechaNacimiento:'',
      detalle:'',
    });
  }
  
  public cargarPaises(){
    this.restService.get(this.urlCiudades)
    .subscribe( Response => 
      {
        this.listapaises=Response;
      });
  }
  
  enviarContacto(){
    let payload = new HttpParams()
    .set('nombre', this.form.value.nombre)
    .set('apellido',this.form.value.apellido)
    .set('edad',this.form.value.edad)
    .set('correoElectronico',this.form.value.correoElectronico)
    .set('ciudad', this.form.value.ciudad)
    .set('fechaNacimiento',this.form.value.fechaNacimiento)
    .set('detalle',this.form.value.detalle);
    console.log(this.form.value.ciudad);
    console.log(this.form.value.fechaNacimiento);

    console.log(this.form.value.ciudad);
    this.restService.post(this.urlemail,payload
    ).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      }
      );
    }
    capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
      console.log(this.opcionSeleccionado);
  }

}
