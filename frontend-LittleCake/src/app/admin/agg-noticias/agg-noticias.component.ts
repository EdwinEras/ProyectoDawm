
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-agg-noticias',
  templateUrl: './agg-noticias.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class AggNoticiasComponent implements OnInit {

  public form:FormGroup;
  constructor(private restService:RestService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   
    // this.cargarNoticias({ titulo: 'hola amigos', descripcion: "La mejor descripcion del mundo" });

    this.form = this.formBuilder.group({
      titulo:'',  
      descripcion:''
    });
  }
  
  url='http://localhost:3000/nuevaNoticia';

  enviarNoticia(){
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('descripcion',this.form.value.descripcion);
  
    this.restService.post(this.url,payload

    
    ).subscribe(
      data=>{
        console.log(data);
      }
      );}
}
