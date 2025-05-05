function dataFiltering(){
    let inputData = Array.from(document.querySelectorAll(".popup-field--input"))

    let data = {
        title: [],
        barName: [],
        barValue:[]
    }

    inputData.map(function(element, index){

        if(index<2){
            data.title.push(element.value)
        }
        if(index >= 2 && index % 2 == 0){
            data.barName.push(element.value)
        }
        if(index >= 2 && index % 2 != 0){
            data.barValue.push(element.value)
        }

    })

    localStorage.setItem("data", JSON.stringify(data))

    return data
}

export function getSavedData(){
    let dataSaved = localStorage.getItem("data")
    dataSaved = JSON.parse(dataSaved)
    console.log(dataSaved)
    let allData = []

    allData.push(...dataSaved.title)
    for(let i = 0; i < 12; i++){
        allData.push(dataSaved.barName[i])
        allData.push(dataSaved.barValue[i])
    }

}

export function chartGenerator(){
    let obj = dataFiltering()
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
            text: obj.title[0], /*WILL BE EDITED*/
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
            data: [ /*WILL BE EDITED*/
                {x: obj.barName[0], y: obj.barValue[0], fillColor: '#439bff'}, 
                {x: obj.barName[1], y: obj.barValue[1], fillColor: '#43d9ff'},
                {x: obj.barName[2], y: obj.barValue[2], fillColor: '#439bff'}, 
                {x: obj.barName[3], y: obj.barValue[3], fillColor: '#43d9ff'},
                {x: obj.barName[4], y: obj.barValue[4], fillColor: '#439bff'}, 
                {x: obj.barName[5], y: obj.barValue[5], fillColor: '#43d9ff'},
                {x: obj.barName[6], y: obj.barValue[6], fillColor: '#439bff'}, 
                {x: obj.barName[7], y: obj.barValue[7], fillColor: '#43d9ff'},
                {x: obj.barName[8], y: obj.barValue[8], fillColor: '#439bff'}, 
                {x: obj.barName[9], y: obj.barValue[9], fillColor: '#43d9ff'},
                {x: obj.barName[10], y: obj.barValue[10], fillColor: '#439bff'}, 
                {x: obj.barName[11], y: obj.barValue[11], fillColor: '#43d9ff'}
            ]
        }],
        xaxis: { 
            categories: /*WILL BE EDITED*/ [obj.barName[0], obj.barName[1], obj.barName[2], obj.barName[3], obj.barName[4], obj.barName[5], obj.barName[6], obj.barName[7], obj.barName[8], obj.barName[9], obj.barName[10], obj.barName[11]],
            title: {
                text: obj.title[1], /*WILL BE EDITED*/
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