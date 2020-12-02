var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
            
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#11cdef',
                '#11cdef',
                '#11cdef',
                '#11cdef',
                '#11cdef',
                '#11cdef'
            ],label: 'ciudad1'
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
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx= document.getElementById("myChartPastel").getContext("2d");
var myChartPastel= new Chart(ctx,{
    type:"doughnut",
    data:{
        labels:['ciudad1','ciudad2','ciudad3','ciudad4'],
        datasets:[{
            data:[100.900,56.785,95.785,37.123],
            backgroundColor:[
                '#f53c56',
                '#11cdef',
                '#feb969',
                '#2dce98', 
            ]
        }]
    }
});