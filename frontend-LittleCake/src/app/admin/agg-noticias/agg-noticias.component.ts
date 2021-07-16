import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
@Component({
  selector: 'app-agg-noticias',
  templateUrl: './agg-noticias.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class AggNoticiasComponent implements OnInit {
  constructor(private restService:RestService) { }

  ngOnInit(): void {
   
    this.cargarNoticias({ titulo: 'hola amigos', descripcion: "La mejor descripcion del mundo" });
  }
 
//INPUTtitulo:string,INPUTdescp:string
  public cargarNoticias(body:object){
   /*let TEXTOtitulo= INPUTtitulo;
    let TEXTOdescripcion= INPUTdescp;*/
    //let body={ titulo: 'ayudaaa', descripcion: "sdkasdjasdsa" };
    console.log(body);

    var url='http://localhost:3000/nuevaNoticia';
    
    this.restService.addNoticia(url,body).subscribe(data => {
      console.log(data);
     // this.postId = data.id; 
    })
  }
}
