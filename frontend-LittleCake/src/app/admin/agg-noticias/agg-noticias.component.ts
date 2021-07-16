
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
<<<<<<< HEAD
=======
   
    // this.cargarNoticias({ titulo: 'hola amigos', descripcion: "La mejor descripcion del mundo" });

    this.form = this.formBuilder.group({
      titulo:'',  
      descripcion:''
    });
>>>>>>> 479746a9d44bbc3f217cbb25bc772023584baf4e
  }
  
  url='http://localhost:3000/nuevaNoticia';

  enviarNoticia(){
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('descripcion',this.form.value.descripcion);
  
    this.restService.addNoticia(this.url,payload

    
<<<<<<< HEAD
    this.restService.postData(url,body).subscribe(data => {
      console.log(data);
     // this.postId = data.id; 
    })
  }
=======
    ).subscribe(
      data=>{
        console.log(data);
      }
      );}
>>>>>>> 479746a9d44bbc3f217cbb25bc772023584baf4e
}
