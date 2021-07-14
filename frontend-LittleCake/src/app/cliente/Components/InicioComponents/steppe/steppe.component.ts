import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-steppe',
  templateUrl: './steppe.component.html',
  styleUrls: ['./steppe.component.css']
})
export class SteppeComponent implements OnInit {



i=0;

titulo=[
  'Regitrate',
  'Elige y pide',
  'Forma de pago',
  'Finalizado'
]
texto=[
  'Registrate para que puedas realizar los pedidos.',
  'Ve a la tienda y elige tus productos preferidos.',
  'Elige tu forma de pago, puede ser por cargeta o en efectivo.',
  'Te mostraremos la hora para que el pedido llegue.',
]
class=[
  'active',
  '',
  '',
  ''
]

siguiente(){
  if(this.i<=2) {
    this.i++;
    this.class[this.i]='active';
  }
  else {
    this.i=0;
    this.class=[
      'active',
      '',
      '',
      ''
    ]
  } 
}
  constructor() { }

  ngOnInit(): void {
    }

}
