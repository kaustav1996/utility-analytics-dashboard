
(function($) {
    "use strict"


Morris.Bar({
    element: 'energy-audit-last-day',
    data: [{
        y: 'Feeder',
        kwh: 1
    }, {
        y: 'DTR',
        kwh: 2707
    }, {
        y: 'Consumer',
        kwh: 4388612
    }, {
        y: 'Loss',
        kwh: -4385905
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
        kwh: 1677
    }, {
        y: 'DTR',
        kwh: 73544
    }, {
        y: 'Consumer',
        kwh: 101519531
    }, {
        y: 'Loss',
        kwh: -101445987
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
        kwh: 82620335
    }, {
        y: 'E-IND',
        kwh: 17178508
    }, {
        y: 'E-COM',
        kwh: 1690924
    }, {
        y: 'E-BULK',
        kwh: 29373
    },{
        y: 'E-PLIGHT',
        kwh: 690
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
        kwh: 3500906
    }, {
        y: 'E-IND',
        kwh: 791857
    }, {
        y: 'E-COM',
        kwh: 94492
    }, {
        y: 'E-BULK',
        kwh: 1332
    },{
        y: 'E-PLIGHT',
        kwh: 25
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
      {value: 6, label: 'Communicated'},
      {value: 22, label: 'Not Communicated'},
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
      {value: 7, label: 'Communicated'},
      {value: 352, label: 'Not Communicated'},
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
      {value: 106, label: 'Communicated'},
      {value: 40581, label: 'Not Communicated'},
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
      {value: 19, label: 'Communicated'},
      {value: 1744, label: 'Not Communicated'},
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
      {value: 7, label: 'Communicated'},
      {value: 33, label: 'Not Communicated'},
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
