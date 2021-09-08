import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TableData } from '../PagComponents/models/tabla.model';

@Component({
  selector: 'app-agg-productos',
  templateUrl: './agg-productos.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class AggProductosComponent implements OnInit {

  public form:FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Producto';
  tableData:any;

  constructor(private fb: FormBuilder,
    private restService: RestService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required]
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


  url='http://localhost:3000/Productos';

  agregarProducto(){
    let payload = new HttpParams()
    .set('nombre', this.form.value.nombre)
    .set('descripcion',this.form.value.descripcion)
    .set('idusuario', 1)
    .set('cantidad', this.form.value.cantidad)
    .set('precio', this.form.value.precio)
    .set('categoria', this.form.value.categoria)
    .set('imagen',"imagen.png");
    this.loading = true;
    this.restService.post(this.url,payload)
    .subscribe(
      data=>{
        console.log(data);
        this.form.setValue({
          nombre:'',
          descripcion:'',
          precio:0,
          cantidad:0,
          categoria:0
        })
        this.openSnackBar("Producto creado","ACEPTAR");
      }
      );
      this.loading = false;

  }
  agregarEditarProducto() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.id === null) {
      this.agregarProducto();
    } else {
      this.editarProducto(this.id);
    }
  }
  editarProducto(id: string) {
    let payload = new HttpParams()
    .set('nombre', this.form.value.nombre)
    .set('cantidad', this.form.value.cantidad)
    .set('precio', this.form.value.precio)
    .set('categoria', this.form.value.categoria)
    .set('imagen',"imagen.png")
    .set('descripcion',this.form.value.descripcion);

    this.loading = true;

    this.restService.put(this.url+'/'+id,payload).subscribe(
      data=>{
        console.log(data);
        this.loading = false;

        this.openSnackBar("Producto actualizado","ACEPTAR");
      }
      );

  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto'
      this.loading = true;
      this.restService.get(this.url+'/'+this.id).subscribe(data => {
        this.tableData=data as TableData[];
        this.form.setValue({
          nombre:this.tableData[0].nombre,
          categoria:this.tableData[0].categoria,
          precio:this.tableData[0].precio,
          descripcion:this.tableData[0].descripcion,
          cantidad:this.tableData[0].cantidad,
        })
        console.log(this.tableData[0].nombre);
        this.loading = false;
      })
    }
  }
}
