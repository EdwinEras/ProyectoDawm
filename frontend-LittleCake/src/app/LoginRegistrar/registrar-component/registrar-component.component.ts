import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-component',
  templateUrl: './registrar-component.component.html',
  styleUrls: ['./registrar-component.component.css']
})
export class RegistrarComponentComponent implements OnInit {

  public form:FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder,
    private restService: RestService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confPass: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }


  url='http://localhost:3000/registro';

  agregarUsuario(){
    let payload = new HttpParams()
    .set('nombre', this.form.value.nombre)
    .set('apellido',this.form.value.apellido)
    .set('email', this.form.value.email)
    .set('password', this.form.value.password)
    .set('confPass', this.form.value.confPass)
    this.loading = true;
    this.restService.post(this.url,payload)
    .subscribe(
      data=>{
        console.log(data);
        this.form.setValue({
          nombre:'',
          apellido:'',
          email:'',
          password:'',
          confPass:''
        })
      });
      this.loading = false;
    }

}
