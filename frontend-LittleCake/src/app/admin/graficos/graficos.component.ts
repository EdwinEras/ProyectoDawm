import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['../vistaproductos/vistaproductos.component.css']
})
export class GraficosComponent implements OnInit {
  public chartOptions: Partial<any>;
  public chartOptions2: Partial<any>;
  public prueba: Partial<any>;
  constructor() { 

    this.prueba = {
      series: [
        {
          name: "Pasteles",
          data: [10, 9, 5, 14, 10, 13, 4]
        },
        {
          name: "Muffins",
          data: [10, 5, 15, 25, 10, 30, 15]
        },
        {
          name: "Galletas x12",
          data: [20, 30, 24, 20, 14, 16, 15]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul"
        ]
      }
    };
  }

  ngOnInit(): void {
  }

}
