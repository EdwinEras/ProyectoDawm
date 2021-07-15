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
  public usuarios: Partial<any>;
  public compra: Partial<any>;
  public prueba: Partial<any>;
  constructor() { 

    this.compra = {
      series: [
        {
          name: "Enero",
          data: [10, 5, 10, 20, 20]
        },
        {
          name: "Febrero",
          data: [9, 7, 5, 30, 15]
        },
        {
          name: "Marzo",
          data: [5, 14, 15, 24, 6]
        },
        {
          name: "Abril",
          data: [14, 8, 25, 20, 5]
        },        {
          name: "Mayo",
          data: [10, 14, 10, 14, 7]
        },
        {
          name: "Junio",
          data: [13, 10, 30, 16, 4]
        },
        {
          name: "Julio",
          data: [4, 3, 15, 15, 3]
        }
      ],
      chart: {
        height: 400,
        type: "bar",
        stacked: true,
      },
      title: {
        text: "TOP 3: Galletas - Cupcakes - Pasteles"
      },
      xaxis: {
        categories: [
          "Tortas personalizadas",
          "Donas de chocolate",
          "Cupcakes",
          "Galletas",
          "Regalos personalizados"
        ]
      }
    };

    this.prueba = {
      series: [
        {
          name: "Pasteles",
          data: [10, 9, 5, 14, 10, 13, 4]
        },
        {
          name: "Cupcakes",
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
          colors: ["#f3f3f3", "transparent"],
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

    this.usuarios = {
      series: [
      {
        data: [
          {
            x: 'Jamal Torres',
            y: 13
          },
          {
            x: 'Felicidad Antolin',
            y: 15
          },
          {
            x: 'Daniel Rodriguez',
            y: 10
          },
          {
            x: 'Juan Fernandez',
            y: 8
          },
          {
            x: 'María del Pozo',
            y: 10
          },
          {
            x: 'Rosa Menendez',
            y: 12
          },
          {
            x: 'Ana Zambrano',
            y: 8
          },
          {
            x: 'Juan Guerra',
            y: 10
          }
        ]
      }
    ],
      legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap'
    },
    title: {
      text: 'Cantidad de productos comprados por cliente - TOP 8'
    }
    };

  }

  ngOnInit(): void {
  }

}
