(function($) {
    "use strict"

Morris.Donut({
    element: 'dt-communication-status',
    colors: ['#9df595','#f2a0ba'],
    backgroundColor: '#FFFFFF',
    labelColor: '#000000',
    formatter: Morris.commas,
    resize: true,
    data: [
      {value: 7, label: 'Communicated'},
      {value: 352, label: 'Not Communicated'},
    ],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
  });
  Morris.Donut({
    element: 'dt-evt',
    colors: ['#c1d47f','#cf6b84','#e0e677','#6895de','#7c56e3','#fa9191'],
    backgroundColor: '#FFFFFF',
    labelColor: '#000000',
    formatter: Morris.commas,
    resize: true,
    data: [
        {value: 6, label: 'Neutral Disturbance - Occurrence'},
        {value: 7, label: 'Neutral Disturbance - Restoration'},
    ],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
  });
    
})(jQuery);

(function($) {
    "use strict"

    var ctx = document.getElementById("chart_widget_2").getContext('2d');


    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["12-10-2019",	"13-10-2019",	"14-10-2019","15-10-2019","16-10-2019","17-10-2019",	"18-10-2019","19-10-2019","20-10-2019","21-10-2019"],
        datasets: [{
            label: 'Load', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
        {
            label: 'Consumption', // Name the series
            data: [5000,70,	2500,	14640,	16141,	7111,	6544,87,1111, 2811], // Specify the data values array
            fill: false,
            borderColor: '#ff66ff', // Add custom color border (Line)
            backgroundColor: '#ff66ff', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }
    ]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

})(jQuery);