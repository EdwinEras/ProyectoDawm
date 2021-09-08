import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  private svg: any;
  private margin = 50;
  private width = 1000 - this.margin * 2;
  private height = 400 - this.margin * 2;
  constructor() {}

  ngOnInit(): void {
    this.createSvg();
    //this.drawBars(this.data);
    d3.json('http://localhost:3000/productos').then((data:any) =>
      this.drawBars(data)
    );
  }
  private createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.nombre))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 20]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: { nombre: string }) => x(d.nombre))
      .attr('y', (d: { precio: d3.NumberValue }) => y(d.precio))
      .attr('width', x.bandwidth())
      .attr(
        'height',
        (d: { precio: d3.NumberValue }) => this.height - y(d.precio)
      )
      .attr('fill', '#d261e8');
  }
}
