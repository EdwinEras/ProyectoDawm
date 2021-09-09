import { Component, OnInit } from '@angular/core';
import { DataNoticias } from '../models/tabla.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-crudnoticia',
  templateUrl: './crudnoticia.component.html',
  styleUrls: ['./crudnoticia.component.css']
})
export class CrudnoticiaComponent implements OnInit {

  private url:any='http://localhost:8080/Noticia';
  DataNoticias:any;
  constructor(private restService:RestService) { }

  ngOnInit(): void {

    this.getTableData();

  }
  getTableData(){
    this.restService.get(this.url).subscribe((res) =>{
      this.DataNoticias=res as DataNoticias[];
    }
    );

  }

  eliminarNoticia(id: string) {
    this.restService.delete(this.url+'/'+id).subscribe((res) =>{
      console.log('Noticia eliminada con exito');
      window.location.reload();
    }
    );
  }
  reload(){
    window.location.reload();
  }

}
