import {Highcharts, dateFormat, numberFormat} from 'highcharts';

export default {
    chart: {
      spacingBottom: 15,
      spacingTop: 10,
      spacingLeft: 10,
      spacingRight: 10,
      width:1000,
      type: 'spline',
      animation: this.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {  
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = (new Date()).getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        }
      }
    },
    title: {
      text: 'Current Application Users (in thousands)'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 1000
        },
        chartOptions: {
          legend: {
            enabled: false
          }
        }
      }]
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
          dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
          numberFormat(this.y, 2);
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: true
    },
    series: [{
      name: 'Total Users at given Time',
      data: (function () {
        // generate an array of random data
        var data = [],
          time = (new Date()).getTime(),
          i;
  
        for (i = -19; i <= 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: Math.random()
          });
        }
        return data;
      }())
    }]
  }