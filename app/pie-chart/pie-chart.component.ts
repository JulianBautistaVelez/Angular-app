import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { PieDataService } from './pie-data.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private service:PieDataService) {}

  @Input() tipo:String;
  private dataSource:Object;

  legendRectSize = 12;
  legendSpacing = 2;                        
  width = 350;
  height = 350;
  margin = 40;
  radius;
  svg;
  svgLegend;
  color;
  pie;
  data_ready;
  legend;
  

  ngOnInit() {
    this.reDraw();
  }
    reDraw(){
      this.service.getPieData(this.tipo).subscribe(
        data=>{
          this.dataSource = data
          this.draw()
        }
      )
    }

    draw() {

      this.radius = Math.min(this.width, this.height) / 2 - this.margin

      this.svg = d3.select("div#container")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 350 350")
        .classed("svg-content", true)
        .append("g")
        .attr("transform", "translate(" + this.width / 2 + "," +
          this.height / 2 + ")");
  
      // set the color scale
      this.color = d3.scaleOrdinal()
        .domain(Object.keys(this.dataSource))
        .range(d3.schemeCategory10);
  
      // Compute the position of each group on the pie:
      this.pie = d3.pie()
        .value(function (d:any) { return d.value })
      
      this.data_ready = this.pie(d3.entries(this.dataSource))

      var arcGenerator = d3.arc()
      .innerRadius(80)         // This is the size of the donut hole
      .outerRadius(this.radius)
  
      this.svg
        .selectAll('whatever')
        .data(this.data_ready)
        .enter()
        .append('path')
        .attr('d', arcGenerator )
        .attr('fill',(d) => { return (this.color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
        
      this.svg.selectAll('whatever')
        .data(this.data_ready)
	      .enter()
        .append("text")
        .style("font-size", "10px")
        .each(function(d){
          var centroid = arcGenerator.centroid(d);
          d3.select(this)
          .attr('x',centroid[0]-12)
          .attr('y',centroid[1])
          .text(d.data.value );
          //console.log(d.value)
        });

      this.svg.append("text")
      .attr("x", 0 )             
      .attr("y", 0 - this.height/2 + this.margin/2)
      .attr("text-anchor", "middle")  
      .style("font-size", "20px")
      .text(()=>{ 
        if(this.tipo == "ingresos") return "Ingresos"
        else return "Gastos"
        }
      );
        
        /**************************************************************************************************************/
        this.svgLegend = d3.select("div#container-legend")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 350 350")
        .classed("svg-legend", true)
        .append("g")
        .attr("transform", "translate(" + this.width / 2 + "," +
        this.height / 2 + ")");
        
        this.legend = this.svg.selectAll('.svg-legend')  
          .data(this.color.domain())                                   
          .enter()                                                
          .append('g')                                            
          .attr('class', 'legend')                                
          .attr('transform', function(d ,i) {                     
            let height = 14;//this.legendRectSize + this.legendSpacing;          
            let offset =  65;//height * this.color.domain().length / 2;     // COLOR NO TIENE VALOR AQUI; ES UNDEFINED
            let horz = -30;//-2 * this.legendRectSize;                       
            let vert = i * height - offset;                       
            return 'translate(' + horz + ',' + vert + ')';        
          }); 

        this.legend.append('rect')                                     
          .attr('width', this.legendRectSize)                          
          .attr('height', this.legendRectSize)                         
          .style('fill', this.color)                                   
          .style('stroke', this.color);                                
    
        this.legend.append('text')                                     
          .attr('x', this.legendRectSize + this.legendSpacing)              
          .attr('y', this.legendRectSize - this.legendSpacing)              
          .text(function(d) { 
            return d
          });
        
        }
  }