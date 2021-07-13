import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';

@Component({
  selector: 'app-geographiclocation',
  templateUrl: './geographiclocation.component.html',
  styleUrls: ['./geographiclocation.component.css']
})
export class GeographiclocationComponent implements OnInit,AfterViewInit  {
  constructor() { }

  ngOnInit(): void {

  }
ngAfterViewInit(){


  const titleProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  const mymap = L.map('mymap').setView([-2.2175001,-79.9092901],16); 

  L.tileLayer(titleProvider,{
      maxZoom :16,
  }).addTo(mymap)

  const marker= L.marker([-2.2175001,-79.9092901]).addTo(mymap)
}


}
