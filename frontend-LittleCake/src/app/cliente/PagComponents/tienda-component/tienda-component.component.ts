import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda-component',
  templateUrl: './tienda-component.component.html',
  styleUrls: ['./tienda-component.component.css']
})
export class TiendaComponentComponent implements OnInit {
  carrito: productos[] =[];
  productos: String[]=[];
  total:number = 0;
  agregarAlCarrito(producto:string,precio:number){
    let index =this.productos.indexOf(producto) ;
    if(this.productos.length==0 || index<0 ){
      let product = {
        producto:producto,
        cantidad:1,
        total:precio, 
      }
       this.carrito.push(product);
      this.productos.push(producto);
    }else if(index>=0){
      this.carrito[index].cantidad++;
      this.carrito[index].total+=precio;
    }
    this.total+=precio;
  }
  eliminarProducto(producto:String){
    let index =this.productos.indexOf(producto);    
    let precioU = this.carrito[index].total /  this.carrito[index].cantidad
    this.carrito[index].total-=precioU;
    this.carrito[index].cantidad--;
    this.total-=precioU;
    if(this.carrito[index].cantidad==0){
      this.carrito.splice(index , 1); 
      this.productos.splice(index , 1);
    }
  }

  mandar = [
    {
      producto: 'darien',
      discripcion: 'altamirano',
      precio:20,
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    },
    {
      producto: 'darien2',
      discripcion: 'altamirano2',
      precio:10,
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    },
    {
      producto: 'darien3',
      discripcion: 'altamirano3',
      precio:16,
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    },
    {
      producto: 'darien4',
      discripcion: 'altamirano4',
      precio:19,
      image: '../../../assets/img/Pastel de chocolate.jpeg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
class productos {
    producto:String;
    cantidad:number;
    total:number;
}
