import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.css']
})
export class ContactoComponentComponent implements OnInit {
  url='http://restcountries.eu/rest/v2/all';
  public listapaises:any =[]
  constructor(private restService:RestService) { }

  ngOnInit(): void {
    this.cargarPaises();
  }
  
  public cargarPaises(){
    this.restService.get(this.url)
    .subscribe( Response => 
      {
        this.listapaises=Response;
      });
  }

}
