import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
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
// FUNCIONA SOLO CAMBIAR LA URL POR LA ORIGINAL
  ngOnInit(): void {  
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    // .then(response =>response.json())
    // .then(data => {
    //   this.mandar=data['abilities'];
    //   console.log(this.mandar);

    // })
    // .catch(error => {console.log('Error:', error)});

  }
  

}
