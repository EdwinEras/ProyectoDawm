import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-form-asker',
  templateUrl: './form-asker.component.html',
  styleUrls: ['./form-asker.component.css']
})
export class FormAskerComponent implements OnInit {
  idTestimonio=this.rutaActiva.snapshot.params.idTestimonio;
  mandar:any=[];
  descripcion='';
  titulo='';
  i=0;
  funciones=[this.postTestimonio,this.putTestimonio];
  public form:FormGroup;
   urlEspecifico:string='http://localhost:3000/testimonio'+ '/'+this.idTestimonio;
   urlGeneral:string='http://localhost:3000/testimonio';
  constructor(private rutaActiva: ActivatedRoute,private restService:RestService,private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    if(this.idTestimonio != undefined){this.getTestimonio(); this.i=1;}

    this.form = this.formBuilder.group({
      titulo:'',  
      descripcion:'',
      idUsuarios:this.idTestimonio, 
      
    });
    console.log(this.i);
  }

  public  getTestimonio(){
    this.restService.get(this.urlEspecifico).subscribe( 
    Response => {
      this.mandar=Response;
      this.titulo=this.mandar[0].titulo;
      this.form.value.titulo=this.mandar[0].titulo;
      this.form.value.descripcion=this.mandar[0].descripcion;
      this.descripcion=this.mandar[0].descripcion;
      },
      Error => {
        console.log(Error);
      });
    }
  public putTestimonio(){
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('descripcion', this.form.value.descripcion)
    .set('idUsuarios', this.idTestimonio)

    this.restService.put(this.urlEspecifico,payload)
    .subscribe(
      data=>{
        console.log(data);
      }
      );
  }
  public postTestimonio(){
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('descripcion', this.form.value.descripcion)
    .set('idUsuarios', 1)

    this.restService.post(this.urlGeneral,payload)
    .subscribe(
      data=>{
        console.log(data);
      }
      );
  }

   f = () => {
    if(this.i ==1 ) this.putTestimonio();
    else this.postTestimonio();
};
}
