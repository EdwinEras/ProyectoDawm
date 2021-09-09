import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataNoticias, TableData } from '../PagComponents/models/tabla.model';

@Component({
  selector: 'app-agg-noticias',
  templateUrl: './agg-noticias.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class AggNoticiasComponent implements OnInit {

  public form:FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Noticia';
  DataNoticias:any;
 
  constructor(private fb: FormBuilder,
    private restService: RestService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      _id: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      idPersona: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }



  ngOnInit(): void {
    this.esEditar();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  url='http://localhost:8080/Noticia';

  agregarNoticia(){
    let payload = new HttpParams()
    .set('_id', this.form.value._id)
    .set('titulo', this.form.value.titulo)
    .set('descripcion',this.form.value.descripcion)
    .set('idPersona',this.form.value.idPersona)
    
    this.loading = true;
    this.restService.post(this.url,payload)
    .subscribe(
      data=>{
        console.log(data);
        this.form.setValue({
          _id:'',
          titulo:'',
          descripcion:'',
          idPersona:''
          
        })
        this.openSnackBar("Noticia creado","ACEPTAR");
      }
      );
      this.loading = false;

  }
  agregarEditarNoticia() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarNoticia();
    } else {
      this.editarNoticia(this.id);
    }
  }
  editarNoticia(id: string) {
    let payload = new HttpParams()
    .set('_id', this.form.value._id)
    .set('descripcion', this.form.value.descripcion)
    .set('titulo', this.form.value.titulo)
    .set('idPersona', this.form.value.idPersona)


    this.loading = true;

    this.restService.put(this.url+'/'+id,payload).subscribe(
      data=>{
        console.log(data);
        this.loading = false;

        this.openSnackBar("Noticia actualizado","ACEPTAR");
      }
      );

  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Noticia'
      this.loading = true;
      this.restService.get(this.url+'/'+this.id).subscribe(data => {
        this.DataNoticias=data as DataNoticias[];
        console.log(this.DataNoticias);
        this.form.patchValue({
          _id:this.DataNoticias._id,
          titulo:this.DataNoticias.titulo,
          descripcion:this.DataNoticias.descripcion,
          idPersona:this.DataNoticias.idPersona,
          
        })
        console.log(this.DataNoticias.titulo);
        this.loading = false;
      })
    }
  }
}
