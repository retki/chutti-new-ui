import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarchartComponent implements OnInit {
  @ViewChild('chart',{static: true})  chartContainer: ElementRef;
  @Input() private chartData: Array<any>;
  private margin: any = { top: 30, bottom: 30, left: 40, right: 40};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
  constructor() { }

  
  ngOnInit() {
    if (this.chartData) {
      this.createBarChart();
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }


  createBarChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    let xDomain = this.chartData.map(d => d.date);
    let yDomain = [0, d3.max(this.chartData, d => d.value)];

    // create scales
    this.xScale = d3.scaleBand().padding(0.5).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    this.colors = d3.scaleLinear().domain([0, this.chartData.length]).range(<any[]>['red', 'blue']);

    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.right}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale));

    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));
      
  }

  updateChart() {
    // update scales & axis
    this.xScale.domain(this.chartData.map(d => d.date));
    this.yScale.domain([0, d3.max(this.chartData, d => d.value)]);
    this.colors.domain([0, this.chartData.length]);
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale));

    let update = this.chart.selectAll('.bar')
      .data(this.chartData);

    // remove exiting bars
    update.exit().remove();

    // // update existing bars
    this.chart.selectAll('.bar').transition()
      .attr('x', d =>this.xScale(d.date))
      .attr('y', d => this.yScale(d.value))
      .attr('width', 30)
      .attr('height', d => this.height - this.yScale(d.value))
      .style('fill', '#6747D4');
    




    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.xScale(d.date))
      .attr('y', d => this.yScale(d.value))
      .attr('width', 30)
      .attr('height', 0)
      .style('fill', '#6747D4')
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d.value))
      .attr('height', d => this.height - this.yScale(d.value));
  }

}
