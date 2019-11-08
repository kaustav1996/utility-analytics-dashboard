(function($) {
    "use strict"


    //todo list
    $(".tdl-new").on('keypress', function(e) {

        var code = (e.keyCode ? e.keyCode : e.which);

        if (code == 13) {

            var v = $(this).val();

            var s = v.replace(/ +?/g, '');

            if (s == "") {

                return false;

            } else {

                $(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>" + v + "</span><a href='#' class='ti-trash'></a></label></li>");

                $(this).val("");

            }

        }

    });





    $(".tdl-content a").on("click", function() {

        var _li = $(this).parent().parent("li");

        _li.addClass("remove").stop().delay(100).slideUp("fast", function() {

            _li.remove();

        });

        return false;

    });



    // for dynamically created a tags

    $(".tdl-content").on('click', "a", function() {

        var _li = $(this).parent().parent("li");

        _li.addClass("remove").stop().delay(100).slideUp("fast", function() {

            _li.remove();

        });

        return false;

    });








})(jQuery);


(function($) {
    "use strict"

    // var i = new Datamap( {
    //     scope: "ind", 
    //     element: document.getElementById("world-map"), 
    //     responsive: !0, 
    //     geographyConfig: {
    //         popupOnHover: !1, 
    //         highlightOnHover: !1, 
    //         borderColor: "transparent", 
    //         borderWidth: 1, 
    //         highlightBorderWidth: 3, 
    //         highlightFillColor: "rgba(0,123,255,0.5)", 
    //         highlightBorderColor: "transparent", 
    //         borderWidth: 1
    //     }, 
    //     bubblesConfig: {
    //         popupTemplate: function (e, i) {
    //             return '<div class="datamap-sales-hover-tooltip">' + i.country + '<span class="ml-2"></span>' + i.sold + "</div>"
    //         }, 
    //         borderWidth: 0, 
    //         highlightBorderWidth: 3, 
    //         highlightFillColor: "rgba(0,123,255,0.5)", 
    //         highlightBorderColor: "transparent", 
    //         fillOpacity: .75
    //     }, 
    //     fills: {
    //         Visited: "#777", 
    //         neato: "#777", 
    //         white: "#777", 
    //         defaultFill: "#EBEFF2"
    //     }
    // });
    
    // i.bubbles(
    //     [
    // //         {
    // //     centered: "USA", fillKey: "white", radius: 5, sold: "$500", country: "United States"
    // // }, {
    // //     centered: "SAU", fillKey: "Visited", radius: 5, sold: "$900", country: "Saudia Arabia"
    // // }, {
    // //     centered: "RUS", fillKey: "neato", radius: 5, sold: "$250", country: "Russia"
    // // }, {
    // //     centered: "CAN", fillKey: "white", radius: 5, sold: "$1000", country: "Canada"
    // // }, {
    // //     centered: "IND", fillKey: "Visited", radius: 5, sold: "$50", country: "India"
    // // }, {
    // //     centered: "AUS", fillKey: "white", radius: 5, sold: "$700", country: "Australia"
    // // }, {
    // //     centered: "BGD", fillKey: "Visited", radius: 5, sold: "$1500", country: "Bangladesh"
    // // }
    // ]
    // ),
    // window.addEventListener("resize", function (e) {
    //     i.resize()
    // });
//     var bubble_map = new Datamap({
//         element: document.getElementById('world-map'),
//         scope: 'india',
//         geographyConfig: {
//             popupOnHover: !1, 
//             highlightOnHover: !1, 
//             borderColor: "transparent", 
//             borderWidth: 1, 
//             highlightBorderWidth: 3, 
//             highlightFillColor: "rgba(0,123,255,0.5)", 
//             highlightBorderColor: "transparent", 
//             borderWidth: 1,
//             dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json'
//             //dataJson: topoJsonData
//         }, 
//             bubblesConfig: {
//                 popupTemplate: function (e, i) {
//                     return '<div class="datamap-sales-hover-tooltip">' + i.country + '<span class="ml-2"></span>' + i.sold + "</div>"
//                 }, 
//                 borderWidth: 0, 
//                 highlightBorderWidth: 3, 
//                 highlightFillColor: "rgba(0,123,255,0.5)", 
//                 highlightBorderColor: "transparent", 
//                 fillOpacity: .75
//             }, 
//         fills: {
//             'MAJOR': '#306596',
//             'MEDIUM': '#0fa0fa',
//             'MINOR': '#bada55',
//             defaultFill: '#dddddd'
//         },
//         data: {
//             'JH': { fillKey: 'MINOR' },
//             'MH': { fillKey: 'MINOR' }
//         },
//         setProjection: function (element) {
//             var projection = d3.geo.mercator()
//                 .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
//                 .scale(1000);
//             var path = d3.geo.path().projection(projection);
//             return { path: path, projection: projection };
//         }
// });
//    bubble_map.bubbles(
//         [
//             {
//         centered: "JH", fillKey: "white", radius: 5, sold: "$500", country: "United States"
//     }, {
//         centered: "JH", fillKey: "Visited", radius: 5, sold: "$900", country: "Saudia Arabia"
//     }, {
//         centered: "JH", fillKey: "neato", radius: 5, sold: "$250", country: "Russia"
//     }, {
//         centered: "MH", fillKey: "white", radius: 5, sold: "$1000", country: "Canada"
//     }, {
//         centered: "MH", fillKey: "Visited", radius: 5, sold: "$50", country: "India"
//     }, {
//         centered: "MH", fillKey: "white", radius: 5, sold: "$700", country: "Australia"
//     }, {
//         centered: "MH", fillKey: "Visited", radius: 5, sold: "$1500", country: "Bangladesh"
//     }
//     ]
//     ),
//     window.addEventListener("resize", function (e) {
//         bubble_map.resize()
//     });

})(jQuery);

(function($) {
    "use strict"


     // LINE CHART
      // Morris bar chart
 Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
        y: 'ESD-1',
        a: 100,
        b: 90,
    }, {
        y: 'ESD-2',
        a: 75,
        b: 65,
    }, {
        y: 'ESD-3',
        a: 50,
        b: 40,
    }, {
        y: 'ESD-4',
        a: 75,
        b: 65,
    }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['DT', 'Consumer'],
    barColors: ['#FC6C8E', '#7571f9'],
    hideHover: 'auto',
    gridLineColor: 'transparent',
    resize: true
});








})(jQuery);




(function($) {
    "use strict"


    $('#todo_list').slimscroll({
        position: "right",
        size: "5px",
        height: "250px",
        color: "transparent"
    });

    $('#activity').slimscroll({
        position: "right",
        size: "5px",
        height: "390px",
        color: "transparent"
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

(function($) {
    "use strict"

    let ctx = document.getElementById("chart_widget_3");
    ctx.height = 130;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                data: [200, 155, 57, 152, 185, 1000],
                label: "Installation",
                backgroundColor: 'transparent',
                borderColor: '#847DFA',
                borderWidth: 2,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: '#847DFA',
                pointBackgroundColor: '#fff',
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                backgroundColor: '#000',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    


})(jQuery);



/*******************
Chart Chartist
*******************/
(function($) {
    "use strict"


    new Chartist.Line("#chart_widget_3", {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        series: [
            [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6]
        ]
    }, {
        low: 0,
        showArea: !1,
        showPoint: !0,
        showLine: !0,
        fullWidth: !0,
        lineSmooth: !1,
        chartPadding: {
            top: 4,
            right: 4,
            bottom: -20,
            left: 4
        },
        axisX: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        },
        axisY: {
            showLabel: !1,
            showGrid: !1,
            offset: 0
        }
    });


    new Chartist.Pie("#chart_widget_3_1", {
        series: [35, 65]
    }, {
        donut: !0,
        donutWidth: 10,
        startAngle: 0,
        showLabel: !1
    });

})(jQuery);




/*******************
Pignose Calender
*******************/
(function ($) {
    "use strict";

    $(".year-calendar").pignoseCalendar({
        theme: "blue"
    }), $("input.calendar").pignoseCalendar({
        format: "YYYY-MM-DD"
    });

})(jQuery);