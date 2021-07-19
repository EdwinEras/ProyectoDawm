import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-noticias-component',
  templateUrl: './noticias-component.component.html',
  styleUrls: ['./noticias-component.component.css']
})
export class NoticiasComponentComponent implements OnInit {
  busqueda:string='';
  cantidad:number=0;

  noticiasSeleccionadas:any =[];
  noticias:any=[];

  constructor(private restService:RestService) {
    
  }

  ngOnInit(): void {
    this.cargarNoticias();
  }
  cambiarNoticias(){
    this.noticiasSeleccionadas=[];
    this.cantidad=0;
    for(let i=0; i<this.noticias.length;i++){
      if(this.noticias[i].titulo.includes(this.busqueda) || this.noticias[i].descripcion.includes(this.busqueda)){
         this.noticiasSeleccionadas.push(this.noticias[i]);
         this.cantidad++;
      }

    }
  }

  url:string='http://localhost:3000/noticias';

  public cargarNoticias(){
    this.restService.get(this.url).subscribe( 
      
    Response => {
      this.noticiasSeleccionadas=Response;
      this.noticias=Response;
      this.cantidad=this.noticiasSeleccionadas.length;
      },
      Error => {
        console.log(Error);
      }
      );
  }
}
