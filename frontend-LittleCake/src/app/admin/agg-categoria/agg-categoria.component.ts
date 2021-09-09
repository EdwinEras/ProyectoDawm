import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataNoticias, TableData } from '../PagComponents/models/tabla.model';

@Component({
  selector: 'app-agg-categoria',
  templateUrl: './agg-categoria.component.html',
  styleUrls: ['./agg-categoria.component.css']
})
export class AggCategoriaComponent implements OnInit {

  public form:FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Categoria';
  DataCategoria:any;
 
  constructor(private fb: FormBuilder,
    private restService: RestService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
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


  url='http://localhost:3000/Categorias';

  agregarCategoria(){
    let payload = new HttpParams()
    .set('id', this.form.value.id)
    .set('nombre', this.form.value.nombre)
    .set('fecha',this.form.value.fecha)
   
    
    this.loading = true;
    this.restService.post(this.url,payload)
    .subscribe(
      data=>{
        console.log(data);
        this.form.setValue({
          id:'',
          nombre:'',
          fecha:'',
          
        })
        this.openSnackBar("Categoria creada","ACEPTAR");
      }
      );
      this.loading = false;

  }
  agregarEditarCategoria() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarCategoria();
    } else {
      this.editarCategoria(this.id);
    }
  }
  editarCategoria(id: string) {
    let payload = new HttpParams()
    .set('id', this.form.value.id)
    .set('nombre', this.form.value.nombre)
    .set('fecha', this.form.value.fecha)


    this.loading = true;

    this.restService.put(this.url+'/'+id,payload).subscribe(
      data=>{
        console.log(data);
        this.loading = false;

        this.openSnackBar("Categoria actualizado","ACEPTAR");
      }
      );

  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Noticia'
      this.loading = true;
      this.restService.get(this.url+'/'+this.id).subscribe(data => {
        this.DataCategoria=data as DataNoticias[];
        console.log(this.DataCategoria);
        this.form.patchValue({
          id:this.DataCategoria.id,
          nombre:this.DataCategoria.nombre,
          fecha:this.DataCategoria.fecha,

          
        })
        console.log(this.DataCategoria.id);
        this.loading = false;
      })
    }
  }

}
