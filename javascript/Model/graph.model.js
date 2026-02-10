export class GraphModel{
    constructor(){
        this.title = []
        this.bar = []
        this.text = []
    }

    saveData(data){
        localStorage.setItem("data", JSON.stringify(data))
    }

    getSavedData(){
        let dataSaved = localStorage.getItem("data")
        dataSaved = JSON.parse(dataSaved)
        
        return dataSaved ? dataSaved : null;
    }

    filterData(barName, barValue, barTitle, graphText){
        this.title = []
        this.bar = []
        this.text = []

        for(let i = 0; i < barName.length; i++){
            let obj = new Object()
            obj.x = barName[i].value
            obj.y = barValue[i].value
            this.bar.push(obj)
        }
        
        barTitle.forEach(element => {
            this.title.push(element.value)
        })

        this.text.push(graphText.value)

        // console.log(barTitle)
        this.saveData(this)
    }

    graphOptions(){
        let barNamesArr = []
        let barWithColor = this.bar
    
        barWithColor.map((element, index) => {
            // fillColor
            (index % 2 == 0) ? element.fillColor = '#439bff' : element.fillColor = '#43d9ff'

            barNamesArr.push(element.x)
        })

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
                text: this.title[0], 
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 20,
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
                    horizontal: false,
                    distributed: false
                }
            },
            series: [{
                name: 'Valor', 
                data: barWithColor
            }],
            xaxis: { 
                categories: barNamesArr,
                title: {
                    text: this.title[1],
                    offsetX: 0,
                    offsetY: -10,
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
                        cssClass: 'apexcharts-xaxis-label'
                    }
                }
            },
            yaxis: {
                show: true,
                showAlways: false,
                showForNullSeries: true,
                seriesName: undefined,
                opposite: false,
                reversed: false,
                logarithmic: false,
                logBase: 10,
                tickAmount: undefined,
                min: undefined,
                max: undefined,
                stepSize: undefined,
                forceNiceScale: true,
                floating: false,
                decimalsInFloat: undefined,
                labels: {
                    show: true,
                    showDuplicates: false,
                    align: 'left',
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: [],
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0,
                    rotate: 0,
                    formatter: (value) => { return value },
                },
                axisBorder: {
                    show: true,
                    color: '#78909C',
                    offsetX: 0,
                    offsetY: 0
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: '#78909C',
                    width: 6,
                    offsetX: 0,
                    offsetY: 0
                },
                title: {
                    text: this.title[2],
                    rotate: -90,
                    offsetX: 5,
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        fontSize: '12px',
                        fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                crosshairs: {
                    show: true,
                    position: 'back',
                    stroke: {
                        color: '#b6b6b6',
                        width: 1,
                        dashArray: 0,
                    },
                },
                tooltip: {
                    enabled: true,
                    offsetX: 0,
                }, 
            }
        }
        return options
    }
}