import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-component',
  templateUrl: './noticias-component.component.html',
  styleUrls: ['./noticias-component.component.css']
})
export class NoticiasComponentComponent implements OnInit {
  busqueda:string='';
  cantidad:number=4;

  noticiasSeleccionadas: noticia[] =[];
  noticias:noticia[] =[
    {
        titulo:"hola",
        descripcion: " palaraEspecial4 Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal.",
        fecha:"12/12/09",
      },{
      titulo:"La bebecita bebelin",
      descripcion: " palaraEspecial3 Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal.",
      fecha:"08/9/00",

    },{
      titulo:"hola",
      descripcion: "palaraEspecial2 Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal.",
      fecha:"14/1/19",

    },{
    titulo:"hola",
    descripcion:  " palaraEspecial Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal.",
    fecha:"12/12/20",

  }]


  constructor() {

   }

  ngOnInit(): void {
    this.noticiasSeleccionadas = this.noticias;

  }
  cambiarNoticias(){
    this.noticiasSeleccionadas=[];
    this.cantidad=0;
      this.noticias.forEach(element => {
        if(element.titulo.includes(this.busqueda) || element.descripcion.includes(this.busqueda)){

         this.noticiasSeleccionadas.push(element);
         this.cantidad++;
        }
      });
  }

}
class noticia {
  titulo:string;
  descripcion:string;
  fecha:string;
}
