import { Component, OnInit,Input } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  mandar:any = [];
  categorias:any=[];

  constructor(private restService:RestService ) { }
// FUNCIONA SOLO CAMBIAR LA URL POR LA ORIGINAL
  ngOnInit(): void { 
    this.cargarProductos(); 
  }
  
  categoriaget(manda:any[]){
    for (let i = 0; i < manda.length; i++) {
      if(this.categorias.indexOf(manda [i].categoria) <0) this.categorias.push(manda [i].categoria);      
    }
  }

 
  url:string='http://localhost:3000/productos';
  public cargarProductos(){
    this.restService.get(this.url).subscribe( 
    Response => {
      this.mandar=Response;
      this.categoriaget(this.mandar);
      },
      Error => {
        console.log(Error);
      }
      );
  }
  

}
