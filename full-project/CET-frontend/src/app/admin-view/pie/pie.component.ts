import { Component, OnInit ,Input, ElementRef} from '@angular/core';
import { InformacionService } from '../../informacion.service';
import * as d3 from "d3";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() grafico;
  data;


  private svg;
  private margin = 50;
  private width = 500;
  private height = 500;

  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;

  constructor(private informacionService: InformacionService, private container: ElementRef) { }

  ngOnInit(): void {
    if(this.grafico=="Citas"){
      this.getDataCitas();
    }else if(this.grafico=="Promos"){
      this.getDataPromos();
    }
 
  }

  getDataCitas(): void{
    this.informacionService.getEstaditicasCitas().subscribe((data: any)=>{
      this.data=data;
      this.createSvg();
    })
  }

  getDataPromos(): void{
    this.informacionService.getEstadisticasPromociones().subscribe((data: any)=>{
      this.data=data;
      this.createSvg();
    })
  }

  private createSvg(): void {
    this.svg = d3.select(this.container.nativeElement).select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
    this.createColors();
}

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(d => d.Cantidad.toString()))
    .range(["#c7d3ec", "#a5b8db", "#879cc4"]);
    this.drawChart();
  }

  private drawChart(): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.Cantidad));

    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d, i) => (this.colors(i)))
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('text')
    .text(d => d.data.Area)
    .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);
  }



}
