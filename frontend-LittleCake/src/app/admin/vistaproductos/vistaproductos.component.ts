import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { TableData } from '../PagComponents/models/tabla.model';
@Component({
  selector: 'app-vistaproductos',
  templateUrl: './vistaproductos.component.html',
  styleUrls: ['./vistaproductos.component.css']
})

export class VistaproductosComponent implements OnInit {
  private url:any='http://localhost:3000/productos';
  tableData:any;
  constructor(private restService:RestService) { }

  ngOnInit(): void {
    this.getTableData();
  }
  getTableData(){
    this.restService.get(this.url).subscribe((res) =>{
      this.tableData=res as TableData[];
    }
    );
  }
}
