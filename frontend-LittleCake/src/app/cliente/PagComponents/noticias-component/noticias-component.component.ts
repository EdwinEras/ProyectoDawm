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
  opcionUser:number=0;
  noticiasSeleccionadas:any =[];
  noticias:any=[];
  usuarios:any=[];
  constructor(private restService:RestService) {
    
  }

  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarNoticias();
  }
  cambiarNoticias(){
    // console.log("hola");
    this.noticiasSeleccionadas=[];
    this.cantidad=0;
    for(let i=0; i<this.noticias.length;i++){
      if(this.noticias[i].titulo.includes(this.busqueda) || this.noticias[i].descripcion.includes(this.busqueda)){
         this.noticiasSeleccionadas.push(this.noticias[i]);
         this.cantidad++;
      }

    }
  }
  public aNoticiaUser(newValue:any){
    this.noticiasSeleccionadas=[];
    this.cantidad=0;
    for(let i=0; i<this.noticias.length;i++){
      if(this.noticias[i].idPersona==newValue ||  newValue==0 ){
        console.log("entra")
         this.noticiasSeleccionadas.push(this.noticias[i]);
         this.cantidad++;
      }

    }
    console.log(newValue)
  }
  urlU:string='http://localhost:3000/users';
  public cargarUsuario(){
    this.restService.get(this.urlU).subscribe( 
    Response => {
      this.usuarios=Response;
      console.log(this.usuarios)
      },
      Error => {
        console.log(Error);
      }
      );
  }
  url:string='http://localhost:8080/Noticia';
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
