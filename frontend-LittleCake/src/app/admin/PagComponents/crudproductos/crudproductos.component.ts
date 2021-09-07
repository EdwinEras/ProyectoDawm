import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { TableData } from '../models/tabla.model';
@Component({
  selector: 'app-crudproductos',
  templateUrl: './crudproductos.component.html',
  styleUrls: ['./crudproductos.component.css']
})

export class CrudproductosComponent implements OnInit {
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
