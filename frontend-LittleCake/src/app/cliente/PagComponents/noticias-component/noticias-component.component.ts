import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-component',
  templateUrl: './noticias-component.component.html',
  styleUrls: ['./noticias-component.component.css']
})
export class NoticiasComponentComponent implements OnInit {
  noticias =[
    {
        titulo:"hola",
        descripcion: "Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal."
    },{
      titulo:"La bebecita bebelin",
      descripcion: "Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal."
    },{
      titulo:"hola",
      descripcion: "Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal."
  },{
    titulo:"hola",
    descripcion: "Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa formada por un conjunto de oraciones secuenciales que trata un mismo tema. Está compuesto por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas. Es un componente del texto que en su aspecto externo comienza con una mayúscula y termina en un punto y aparte. Comprende varias oraciones relacionadas sobre el mismo subtema; una de ellas expresa la idea principal."
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
