
(function($) {
    "use strict"


Morris.Bar({
    element: 'energy-audit-last-day',
    data: [{
        y: 'Feeder',
        kwh: 16000
    }, {
        y: 'DTR',
        kwh: 15000
    }, {
        y: 'Consumer',
        kwh: 14800
    }, {
        y: 'Loss',
        kwh: 200
    }],
    xkey: 'y',
    ykeys: ['kwh'],
    labels: ['KWh'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});
    
    
    
})(jQuery);
(function($) {
    "use strict"

Morris.Bar({
    element: 'energy-audit-last-30-days',
    data: [{
        y: 'Feeder',
        kwh: 6000560
    }, {
        y: 'DTR',
        kwh: 5500000
    }, {
        y: 'Consumer',
        kwh: 4500000
    }, {
        y: 'Loss',
        kwh: 1000000
    }],
    xkey: 'y',
    ykeys: ['kwh'],
    labels: ['KWh'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});
})(jQuery);

(function($) {
    "use strict"

Morris.Bar({
    element: 'category-consumption-last-day',
    data: [{
        y: 'E-RES',
        kwh: 59515
    }, {
        y: 'E-COM',
        kwh: 25857
    }, {
        y: 'E-IND',
        kwh: 1791
    }, {
        y: 'E-MOB',
        kwh: 1642
    },{
        y: 'E-BULK',
        kwh: 1239
    },{
        y: 'E-PLIGHT',
        kwh: 533
    },{
        y: 'E-PUTIL',
        kwh: 269
    }],
    xkey: 'y',
    ykeys: ['kwh'],
    labels: ['KWh'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});
})(jQuery);

(function($) {
    "use strict"

Morris.Bar({
    element: 'category-consumption-last-30-days',
    data: [{
        y: 'E-RES',
        kwh: 25276398
    }, {
        y: 'E-COM',
        kwh: 3201530
    }, {
        y: 'E-BULK',
        kwh: 138791
    }, {
        y: 'E-MOB',
        kwh: 77271
    },{
        y: 'E-IND',
        kwh: 65150
    },{
        y: 'E-PLIGHT',
        kwh: 51365
    },{
        y: 'E-PUTIL',
        kwh: 26905
    }],
    xkey: 'y',
    ykeys: ['kwh'],
    labels: ['KWh'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});
})(jQuery);


(function($) {
    "use strict"

Morris.Donut({
    element: 'feeder-comm',
    colors: ['#9df595','#f2a0ba'],
    backgroundColor: '#FFFFFF',
    labelColor: '#000000',
    formatter: Morris.commas,
    resize: true,
    data: [
      {value: 0, label: 'Communicated'},
      {value: 28, label: 'Not Communicated'},
    ],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
  });
  Morris.Donut({
    element: 'dt-comm',
    colors: ['#9df595','#f2a0ba'],
    backgroundColor: '#FFFFFF',
    labelColor: '#000000',
    formatter: Morris.commas,
    resize: true,
    data: [
      {value: 77, label: 'Communicated'},
      {value: 282, label: 'Not Communicated'},
    ],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
  });
  Morris.Donut({
    element: '1-ph-comm',
    colors: ['#9df595','#f2a0ba'],
    backgroundColor: '#FFFFFF',
    labelColor: '#000000',
    formatter: Morris.commas,
    resize: true,
    data: [
      {value: 14666, label: 'Communicated'},
      {value: 26021, label: 'Not Communicated'},
    ],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
  });
  Morris.Donut({
    element: '3-ph-comm',
    colors:['#9df595','#f2a0ba'],
    backgroundColor: '#FFFFFF',
    labelColor: '#000000',
    formatter: Morris.commas,
    resize: true,
    data: [
      {value: 725, label: 'Communicated'},
      {value: 1038, label: 'Not Communicated'},
    ],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
  });
  Morris.Donut({
    element: '3-ph-CT-comm',
    colors: ['#9df595','#f2a0ba'],
    backgroundColor: '#FFFFFF',
    labelColor: '#000000',
    formatter: Morris.commas,
    resize: true,
    data: [
      {value: 8, label: 'Communicated'},
      {value: 26, label: 'Not Communicated'},
    ],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
  });
    
})(jQuery);
(function($) {
    "use strict"
    Morris.Donut({
        element: '1-ph-evt',
        colors: ['#c1d47f','#cf6b84','#e0e677','#6895de','#7c56e3','#fa9191'],
        backgroundColor: '#FFFFFF',
        labelColor: '#000000',
        formatter: Morris.commas,
        resize: true,
        data: [
          {value: 2, label: 'Over Voltage Occurence'},
          {value: 12, label: 'Over Voltage Restoration'},
        ],
        formatter: function (x) { return x }
      }).on('click', function(i, row){
        console.log(i, row);
      });
      Morris.Donut({
        element: '3-ph-evt',
        colors: ['#c1d47f','#cf6b84','#e0e677','#6895de','#7c56e3','#fa9191'],
        backgroundColor: '#FFFFFF',
        labelColor: '#000000',
        formatter: Morris.commas,
        resize: true,
        data: [
          {value: 2, label: 'Neutral Disturbance - Occurrence'},
          {value: 2, label: 'Neutral Disturbance - Restoration'},
          {value: 1, label: 'Over Voltage Occurence'},
          {value: 7, label: 'Over Voltage Restoration'},
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
