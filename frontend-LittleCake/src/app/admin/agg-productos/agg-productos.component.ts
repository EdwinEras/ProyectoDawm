import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RestService } from 'src/app/rest.service';
=======
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';

>>>>>>> 479746a9d44bbc3f217cbb25bc772023584baf4e
@Component({
  selector: 'app-agg-productos',
  templateUrl: './agg-productos.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class AggProductosComponent implements OnInit {

<<<<<<< HEAD
  constructor(private restService:RestService) { }
=======
  public form:FormGroup;

  constructor(private restService:RestService, private formBuilder:FormBuilder) { }
>>>>>>> 479746a9d44bbc3f217cbb25bc772023584baf4e

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo:'',  
      descripcion:'',
      cantidad:0,
      precio:0
    });
  }
<<<<<<< HEAD
  
  public cargarProductos(body:object){
     console.log(body);
     var url='http://localhost:3000/nuevoProducto';
     this.restService.postData(url,body).subscribe(data => {
       console.log(data);
     })
   }
=======


  url='http://localhost:3000/nuevoProducto';

  enviarProducto(){
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('cantidad', this.form.value.cantidad)
    .set('precio', this.form.value.precio)
    .set('descripcion',this.form.value.descripcion);
  
    this.restService.addNoticia(this.url,payload

    
    ).subscribe(
      data=>{
        console.log(data);
      }
      );}

>>>>>>> 479746a9d44bbc3f217cbb25bc772023584baf4e
}
