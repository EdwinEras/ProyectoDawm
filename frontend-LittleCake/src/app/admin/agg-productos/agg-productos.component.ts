import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-agg-productos',
  templateUrl: './agg-productos.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class AggProductosComponent implements OnInit {

  public form:FormGroup;

  constructor(private restService:RestService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo:'',  
      descripcion:'',
      cantidad:0,
      precio:0
    });
  }


  url='http://localhost:3000/nuevoProducto';

  enviarProducto(){
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('cantidad', this.form.value.cantidad)
    .set('precio', this.form.value.precio)
    .set('descripcion',this.form.value.descripcion);

    this.restService.post(this.url,payload)
    .subscribe(
      data=>{
        console.log(data);
      }
      );
  }

}
