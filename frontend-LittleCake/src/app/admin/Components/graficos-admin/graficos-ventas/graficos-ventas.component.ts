import { Component, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
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
  selector: 'app-graficos-ventas',
  templateUrl: './graficos-ventas.component.html',
  styleUrls: ['./graficos-ventas.component.css']
})
export class GraficosVentasComponent implements OnInit {
  public detalles1: Partial<any>;
  public mensuales: Partial<any>;
  public visitas: Partial<any>;

  constructor() { 
    this.detalles1 = {
      chart: {
        id: 'sparkline1',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 1,
      },
      series: [{
        name: 'Productos vendidos',
        data: [3, 2, 4, 1, 3, 2, 2, 4, 5, 0, 1, 2, 3, 5, 2, 1]
      }],
      labels: [...Array(16).keys()].map(n => `2021-07-0${n+1}`),
      yaxis: {
        min: 0
      },
      xaxis: {
        type: 'datetime',
      },
      colors: ['#e698bf'],
      title: {
        text: '$154.84',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: 'Ingresos',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title'
        }
      }
    }

    this.mensuales = {
      series: [
        {
          name: "Tortas",
          data: [125.14, 100, 50, 67.24, 36.45,22, 50.25]
        },
        {
          name: "Donas",
          data: [13, 23, 20, 50.75, 13, 10,24.75]
        },
        {
          name: "Cupcakes",
          data: [11, 17, 15, 36, 40, 42,25.84]
        },
        {
          name: "Galletas",
          data: [45.14, 50.45, 78.45, 13.50, 35,48.78, 24]
        },
        {
          name: "Regalos personalizados",
          data: [41, 85.4, 25, 25, 22, 38,30]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2021",
          "02/2021",
          "03/2021",
          "04/2021",
          "05/2021",
          "06/2021",
          "07/2021"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    }
    
  }

  ngOnInit(): void {
  }


}