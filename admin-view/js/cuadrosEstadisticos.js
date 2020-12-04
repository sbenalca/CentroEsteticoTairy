var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
            label: "ciudad 1", 
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#11cdef',
                '#11cdef',
                '#11cdef',
                '#11cdef',
                '#11cdef',
                '#11cdef'
            ],
            borderColor:[
            '#ffff',
            '#ffff',
            '#ffff',
            '#ffff',
            '#ffff'
            ]
            //,borderWidth:['1','1','1','1','1'] 

        }, {
            label: 'ciudad2',
            data: [10, 5, 3, 6, 8, 15],
            backgroundColor: [
                '#7764e4',
                '#7764e4',
                '#7764e4',
                '#7764e4',
                '#7764e4',
                '#7764e4'
            ],
            type: 'bar'
        },{
            label: 'ciudad3',
            data: [6, 8, 3, 10, 15, 7],
            backgroundColor: [
                '#2dce98',
                '#2dce98',
                '#2dce98',
                '#2dce98',
                '#2dce98',
                '#2dce98'
            ],
            type: 'bar'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) { 
                        if(parseInt(value) >= 1000){ 
                            return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g +'k', ","); 
                        } else { 
                            return '$' + value +'k'; 
                        } 
                    } 
                }
            }], xAxes: [{ barThickness : 8 }]
        }, 
        legend: { 
            labels: { 
                fontColor: "#4d4f5c", fontSize: 10
            } ,position: 'bottom'
        }
    }
});

var data = {
        labels:['ciudad1   $100.90','ciudad2   $56.78','ciudad3   $95.78','ciudad4   $37.12'],
        datasets:[{
            data:[100.90,56.78,95.78,37.12],
            backgroundColor:[
                '#f53c56',
                '#11cdef',
                '#feb969',
                '#2dce98', 
            ]
        }]
    };
var myChartPastel= new Chart(document.getElementById("myChartPastel").getContext("2d"),{
    type:"doughnut",
    data: data,
    options: { 
        legend: { 
            labels: { 
                fontColor: "#4d4f5c", fontSize: 12,
            },position: 'right'
        },

    },
     plugins: [{
        id: 'total',
        beforeDraw: function(chart) {
            const width = chart.chart.width;
            const height = chart.chart.height;
            const ctx = chart.chart.ctx;
            ctx.restore();
            const fontSize = (height / 300).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
        
            ctx.textBaseline = 'middle';


            var total = data.datasets[0].data.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return  previousValue + currentValue;
            });
            const text = '$'+total;
            const textX = Math.round((width - ctx.measureText(text).width) / 3.1);
            const textY = height / 2.1;

            const text2='Total Budget'
            const textX2 = Math.round((width - ctx.measureText(text).width) / 3.4);
            const textY2 = height / 1.9;

            ctx.fillText(text, textX, textY);
            ctx.fillText(text2, textX2, textY2);
            ctx.save();
        }
    }]
});


// The svg -- MAPA
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
var projection = d3.geoMercator()
    //.center([-30,-5])
    .center([-150,80])              // GPS of location to zoom on
    .scale(100)                       // 700 This is like the zoom
    //.translate([ width/.8, height/2 ])
    .translate([width/.10, height/4])
    .rotate([0,0]);
d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")  // World shape
  .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_gpsLocSurfer.csv") // Position of circles
  .await(ready);

function ready(error, dataGeo, data) {

  // Create a color scale
  var allContinent = d3.map(data, function(d){return(d.homecontinent)}).keys()
  var color = d3.scaleOrdinal()
    .domain(allContinent)
    .range(d3.schemePaired);

  // Add a scale for bubble size
  var valueExtent = d3.extent(data, function(d) { return +d.n; })
  var size = d3.scaleSqrt()
    .domain(valueExtent)  // What's in the data
    .range([ 1, 50])  // Size in pixel

  // Draw the map
  svg.append("g")
      .selectAll("path")
      .data(dataGeo.features)
      .enter()
      .append("path")
        .attr("fill", "#b8b8b8")
        .attr("d", d3.geoPath()
            .projection(projection)
        )
      .style("stroke", "#ffff")
      .style("opacity", .3)

  // Add circles:
  svg
    .selectAll("myCircles")
    .data(data.sort(function(a,b) { return +b.n - +a.n }).filter(function(d,i){ return i<300 }))
    .enter()
    .append("circle")
      .attr("cx", function(d){ return projection([+d.homelon, +d.homelat])[0] })
      .attr("cy", function(d){ return projection([+d.homelon, +d.homelat])[1] })
      .attr("r", function(d){ return size(+d.n) })
      .style("fill", function(d){ return color(d.homecontinent) })
      //.attr("stroke", function(d){ if(d.n>200){return "black"}else{return "none"}  })
      .attr("stroke-width", 1)
      .attr("fill-opacity", .4)

  // --------------- //
  // ADD LEGEND //
  // --------------- //

  // Add legend: circles
  /*var valuesToShow = [100,4000,15000]
  var xCircle = 40
  var xLabel = 90
  svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("circle")
      .attr("cx", xCircle)
      .attr("cy", function(d){ return height - size(d) } )
      .attr("r", function(d){ return size(d) })
      .style("fill", "none")
      .attr("stroke", "black")

  // Add legend: segments
  svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("line")
      .attr('x1', function(d){ return xCircle + size(d) } )
      .attr('x2', xLabel)
      .attr('y1', function(d){ return height - size(d) } )
      .attr('y2', function(d){ return height - size(d) } )
      .attr('stroke', 'black')
      .style('stroke-dasharray', ('2,2'))

  // Add legend: labels
  svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("text")
      .attr('x', xLabel)
      .attr('y', function(d){ return height - size(d) } )
      .text( function(d){ return d } )
      .style("font-size", 10)
      .attr('alignment-baseline', 'middle')*/
}