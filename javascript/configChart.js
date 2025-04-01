let options = {
    chart: {
        sparkline: {
            enabled: false //hide bar name and max-min range numbers
        },
        stacked: true, //max will be upper than value
        width: '100%',
        height: '100%',
        type: 'bar',
        offsetX: 0,
        offsetY: 0,
        background: '#1a1a1a',
        foreColor: '#ffffff',
        fontFamily:  'Inter, Arial, Helvetica, sans-serif',
        parentHeightOffset: 0,
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        toolbar: {
            export: {
                csv: {
                    filename: 'GraphCSV',
                    columnDelimiter: ',',
                    headerCategory: 'category',
                    headerValue: 'value',
                    categoryFormatter(x) {
                      return new Date(x).toDateString()
                    },
                    valueFormatter(y) {
                      return y
                    }
                },
                svg: {
                    filename: 'GraphSVG',
                },
                png: {
                    filename: 'GraphPNG',
                }
            }
        }
    },
    dataLabels: { //bar font color
        enabled: false
    },
    title: {
        text: 'Titulo Graph',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 15,
        floating: false,
        style: {
            fontSize:  '1rem',
            fontWeight:  'bold',
            fontFamily:  'Inter, Arial, Helvetica, sans-serif',
            color:  '#ffffff'
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: false
        }
    },
    series: [{
        name: 'Valor', 
        data: [
            {x: 'nome1', y: 100, fillColor: '#439bff'}, 
            {x: 'nome2', y: 90, fillColor: '#43d9ff'},
            {x: 'nome3', y: 80, fillColor: '#439bff'}, 
            {x: 'nome4', y: 70, fillColor: '#43d9ff'},
            {x: 'nome5', y: 60, fillColor: '#439bff'}, 
            {x: 'nome6', y: 50, fillColor: '#43d9ff'},
            {x: 'nome7', y: 40, fillColor: '#439bff'}, 
            {x: 'nome8', y: 30, fillColor: '#43d9ff'},
            {x: 'nome9', y: 20, fillColor: '#439bff'}, 
            {x: 'nome10', y: 10, fillColor: '#43d9ff'},
            {x: 'nome11', y: 5, fillColor: '#439bff'}, 
            {x: 'nome12', y: 4, fillColor: '#43d9ff'}
        ]
    }],
    xaxis: {
        categories: ['nomez1', 'nomez2', 'nomez3', 'nomez4', 'nomez5', 'nomez6', 'nomez7', 'nomez8', 'nomez9', 'nomez10', 'nomez11', 'nomez12'],
        title: {
            text: 'TESTE',
            offsetX: 0,
            offsetY: 10,
            style: {
                color: '#fff',
                fontSize: '12px',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-title',
            }
        },
        labels: {
            show: true,
            rotate: -45,
            rotateAlways: true,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: ['#fff'],
                fontSize: '12px',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            }
        }
    }
}
  
let chart = new ApexCharts(document.querySelector('#chart'), options);
  
chart.render();