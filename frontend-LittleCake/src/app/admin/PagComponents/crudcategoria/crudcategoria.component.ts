import { Component, OnInit } from '@angular/core';
import { DataCategoria } from '../models/tabla.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-crudcategoria',
  templateUrl: './crudcategoria.component.html',
  styleUrls: ['./crudcategoria.component.css']
})
export class CrudcategoriaComponent implements OnInit {

  private url:any='http://localhost:3000/Categorias';
  DataCategoria:any;
  constructor(private restService:RestService) { }

  ngOnInit(): void {

    this.getTableData();

  }
  getTableData(){
    this.restService.get(this.url).subscribe((res) =>{
      this.DataCategoria=res as DataCategoria[];
    }
    );

  }

  eliminarCategoria(id: string) {
    this.restService.delete(this.url+'/'+id).subscribe((res) =>{
      console.log('Categoria eliminada con exito');
      window.location.reload();
    }
    );
  }
  reload(){
    window.location.reload();
  }
}
