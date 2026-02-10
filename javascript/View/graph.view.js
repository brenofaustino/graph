export class GraphView{
    constructor(){
        this.barDataName = Array.from(document.getElementsByClassName('dialog-box__input-bar-name'))
        this.barDataValue = Array.from(document.getElementsByClassName('dialog-box__input-bar-value'))
        this.titleData = Array.from(document.getElementsByClassName('dialog-box__form-title-js'))
        this.textData = document.querySelector('.dialog-box__form-text-field')

        this.chartBox = document.querySelector('#chart')
        this.form = document.getElementById('dialog-box__main-form')
        this.dialogbox = document.querySelector("#main-box__dialog")
        this.dialog = document.querySelector("#chart-area__dialog-button")
        this.addButton = document.getElementById("main-form__btn-add")
        this.delButton = document.getElementById("main-form__btn-del")
    }

    setNewDataDOM(){
        this.barDataName = Array.from(document.getElementsByClassName('dialog-box__input-bar-name'))
        this.barDataValue = Array.from(document.getElementsByClassName('dialog-box__input-bar-value'))
        this.titleData = Array.from(document.getElementsByClassName('dialog-box__form-title-js'))
        this.textData = document.querySelector('.dialog-box__form-text-field')
    }

    addBarField(){
        const containerButtons = document.querySelector("#dialog-box__main-form-btnbox")
        let barFields = Array.from(document.querySelectorAll(".dialog-box__graph-bar-box"))
        
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
        fieldName.setAttribute("name", `bar-name${barFields.length + 1}`)
        fieldName.setAttribute("id", `name-bar${barFields.length + 1}`)
        fieldName.value = ""

        
        //settings to value fields
        let fieldValue = lastBarBox.lastElementChild.firstElementChild
        fieldValue.setAttribute("for", `value-bar${barFields.length + 1}`)
        fieldValue.textContent = `Valor ${barFields.length + 1}`
        fieldValue = lastBarBox.lastElementChild.lastElementChild
        fieldValue.setAttribute("name", `bar-value${barFields.length + 1}`)
        fieldValue.setAttribute("id", `value-bar${barFields.length + 1}`)
        fieldValue.value = ""

        let formContainer = containerButtons.parentNode
        formContainer.insertBefore(lastBarBox, containerButtons)
    }

    excludeBarField(){
        const containerButtons = document.querySelector("#dialog-box__main-form-btnbox")
        let barFields = Array.from(document.querySelectorAll(".dialog-box__graph-bar-box"))

        if(barFields.length == 1){
            return console.log("Valor minimo atingido")
        }

        let lastBarBox = containerButtons.previousElementSibling
        lastBarBox.parentElement.removeChild(lastBarBox)
    }

    clearFullInput(){
        const containerButtons = document.querySelector("#dialog-box__main-form-btnbox")
        let barFields = Array.from(document.querySelectorAll(".dialog-box__graph-bar-box"))

        for(let i = barFields.length - 1; i > 0; i--){
            let lastBarBox = containerButtons.previousElementSibling
            lastBarBox.parentElement.removeChild(lastBarBox)
        }
    }

    addText(){
        let text = document.querySelector(".dialog-box__form-text-field")
        let paragraph = document.querySelector("#chart-area__opening-text");
        (text.value == "") ? paragraph.innerHTML = "Monte seu gráfico, pode conter até 12 (doze) barras.<br>(Altere esse texto no campo TEXTO DE APOIO clicando em editar gráfico)" : paragraph.innerHTML = text.value;
    }
}