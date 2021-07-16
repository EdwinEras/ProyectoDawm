import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
@Component({
  selector: 'app-agg-productos',
  templateUrl: './agg-productos.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class AggProductosComponent implements OnInit {

  constructor(private restService:RestService) { }

  ngOnInit(): void {
  }
  
  public cargarProductos(body:object){
     console.log(body);
     var url='http://localhost:3000/nuevoProducto';
     this.restService.postData(url,body).subscribe(data => {
       console.log(data);
     })
   }
}
