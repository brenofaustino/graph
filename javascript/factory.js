//DATA SECTION
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

function getSavedData(){
    let dataSaved = localStorage.getItem("data")
    dataSaved = JSON.parse(dataSaved)
    
    return dataSaved
}

function clearInputField(){
    const containerButtons = document.querySelector("#form-bar-buttons")
    let barFields = Array.from(document.querySelectorAll(".form-box__bar"))
    for(let i = barFields.length; i > 1; i--){
        let lastBarBox = containerButtons.previousElementSibling
        lastBarBox.parentElement.removeChild(lastBarBox)
    }

    let fields = document.querySelectorAll(".popup-field--input")
    for (let i = 0; i < fields.length; i++){
        fields[i].value = ""
    }
}

export function loadInputValue(){
    let data = getSavedData()
    if(data){
        clearInputField()
        let allData = []
        
        allData.push(...data.title)
        for(let i = 0; i < data.barName.length; i++){
            if(i > 0){
                addBarField()
            } //O ERRO ESTÁ AQUI, COM 2 VALORES ELE ADD +1
            //talvez porque o numero de linhas nunca seja deletado

            allData.push(data.barName[i])
            allData.push(data.barValue[i])
        }
        
        let fields = document.querySelectorAll(".popup-field--input")
        for (let i = 0; i < fields.length; i++){
            fields[i].value = allData[i]
        }
    }
}

function barChartData(){
    let obj = dataFiltering()
    let barData = []
    for(let i = 0; i < obj.barName.length; i++){
        if(i % 2 == 0){
            barData.push({
                x: obj.barName[i],
                y: obj.barValue[i],
                fillColor: '#439bff'
            })
        }
        if(i % 2 != 0){
            barData.push({
                x: obj.barName[i],
                y: obj.barValue[i],
                fillColor: '#43d9ff'
            })
        }
    }
    return barData
}

//DOM SECTION
export function addBarField(){
    const containerButtons = document.querySelector("#form-bar-buttons")
    let barFields = Array.from(document.querySelectorAll(".form-box__bar"))
    
    if(barFields.length == 12){
        return console.log("maximo de 12")
    }
    
    let lastBarBox = containerButtons.previousElementSibling
    lastBarBox = lastBarBox.cloneNode(true)
    
    //settings to name fields
    let fieldName = lastBarBox.firstElementChild.firstElementChild
    fieldName.setAttribute("for", `name-bar${barFields.length + 1}`)
    fieldName.textContent = `Nome ${barFields.length + 1}`
    fieldName = lastBarBox.firstElementChild.lastElementChild
    fieldName.setAttribute("id", `name-bar${barFields.length + 1}`)
    fieldName.setAttribute("name", `bar-name${barFields.length + 1}`)
    fieldName.value = ""
    
    //settings to value fields
    let fieldValue = lastBarBox.lastElementChild.firstElementChild
    fieldValue.setAttribute("for", `bar${barFields.length + 1}`)
    fieldValue.textContent = `Valor ${barFields.length + 1}`
    fieldValue = lastBarBox.lastElementChild.lastElementChild
    fieldValue.setAttribute("id", `bar${barFields.length + 1}`)
    fieldValue.setAttribute("name", `value-bar${barFields.length + 1}`)
    fieldValue.value = ""
    
    let formContainer = containerButtons.parentNode
    formContainer.insertBefore(lastBarBox, containerButtons)
}

export function excludeBarField(){
    const containerButtons = document.querySelector("#form-bar-buttons")
    let barFields = Array.from(document.querySelectorAll(".form-box__bar"))

    if(barFields.length == 1){
        return console.log("Valor minimo atingido")
    }

    let lastBarBox = containerButtons.previousElementSibling
    lastBarBox.parentElement.removeChild(lastBarBox)
}

//CHART GENERATION SECTION
export function chartGenerator(){
    let obj = dataFiltering()
    let barData = barChartData()

    let categorieArr = [];
    for(let prop of barData){
        categorieArr.push(prop.x)
    }

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
            data: barData
        }],
        xaxis: { 
            categories: categorieArr,
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