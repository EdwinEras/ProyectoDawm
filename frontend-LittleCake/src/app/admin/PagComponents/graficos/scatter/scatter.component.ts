import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    d3.json('http://localhost:3000/productos').then((data:any) =>
      this.drawPlot(data)
    );
  }
  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
private drawPlot(data: any[]): void {
  // Add X axis
  const x = d3.scaleLinear()
  .domain([0, 20])
  .range([ 0, this.width ]);
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 25])
  .range([ this.height, 0]);
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  const dots = this.svg.append('g');
  dots.selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d: { precio: d3.NumberValue; }) => x(d.precio))
  .attr("cy", (d: { cantidad: d3.NumberValue; }) => y(d.cantidad))
  .attr("r", 7)
  .style("opacity", .5)
  .style("fill", "#9c18de");

  // Add labels
  dots.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text((d: { nombre: any; }) => d.nombre)
  .attr("x", (d: { precio: d3.NumberValue; }) => x(d.precio))
  .attr("y", (d: { cantidad: d3.NumberValue; }) => y(d.cantidad))
}

}
