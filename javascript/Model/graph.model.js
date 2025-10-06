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
                    horizontal: (innerWidth < 1200),
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
        return options
    }
}