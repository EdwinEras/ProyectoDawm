import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda-component',
  templateUrl: './tienda-component.component.html',
  styleUrls: ['./tienda-component.component.css']
})
export class TiendaComponentComponent implements OnInit {
  mandar = [
    {
      producto: 'darien',
      discripcion: 'altamirano',
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    },
    {
      producto: 'darien2',
      discripcion: 'altamirano2',
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    },
    {
      producto: 'darien3',
      discripcion: 'altamirano3',
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    },
    {
      producto: 'darien4',
      discripcion: 'altamirano4',
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
