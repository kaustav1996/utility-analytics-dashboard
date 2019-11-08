
(function($) {
    "use strict"


Morris.Bar({
    element: 'category-wise-consumption',
    data: [{
        y: 'E-COM',
        count: 7561
    }, {
        y: 'E-PLIGHT',
        count: 225
    }, {
        y: 'E-RES',
        count: 34413
    }, {
        y: 'E-IND',
        count: 128
    },{
        y: 'E-BULK',
        count: 35
    },{
        y: 'E-MOB',
        count: 44
    },{
        y: 'E-PUTIL',
        count: 18
    }],
    xkey: 'y',
    ykeys: ['count'],
    labels: ['Count'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});
Morris.Bar({
    element: 'category-status',
    data: [{
        y: 'Connected and Commissioned',
        count: 42262
    }, {
        y: 'Disconnected and Commissioned',
        count: 57
    }],
    xkey: 'y',
    ykeys: ['count'],
    labels: ['Count'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});
Morris.Bar({
    element: 'phase-wise-meter-installed',
    data: [{
        y: '1-ph mtr',
        count: 40687
    }, {
        y: '3-ph mtr',
        count: 1763
    }, {
        y: 'DT mtr',
        count: 359
    }, {
        y: '3-ph CT mtr',
        count: 34
    },{
        y: 'Feeder mtr',
        count: 28
    }],
    xkey: 'y',
    ykeys: ['count'],
    labels: ['Count'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});
Morris.Bar({
    element: 'phase-wise-meter-supplied',
    data: [{
        y: 'Single Phase Smart Meter',
        count: 42831
    }, {
        y: 'Three Phase Smart Meter',
        count: 2044
    }, {
        y: 'SCT Operated Three Phase Meter',
        count: 415
    }],
    xkey: 'y',
    ykeys: ['count'],
    labels: ['Count'],
    barColors: ['#FC6C8E'],
    hideHover: 'auto',
    xLabelMargin : 1,
    gridLineColor: 'transparent',
    resize: true
});

})(jQuery);

