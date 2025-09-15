export class GraphView{
    constructor(){
        this.barDataName = Array.from(document.getElementsByClassName('popup-field--input-bar'))
        this.barDataValue = Array.from(document.getElementsByClassName('popup-field--input-valuebar'))
        this.titleData = Array.from(document.querySelectorAll('.popup-field--title-input'))
        this.textData = document.querySelector('.form-box__text-field')

        this.chartBox = document.querySelector('#chart')
        this.form = document.getElementById('popup__main-form')
        this.dialogbox = document.querySelector("#dialog")
        this.dialog = document.querySelector("#dialog-button")
        this.addButton = document.getElementById("add")
        this.delButton = document.getElementById("del")
    }

    setNewDataDOM(){
        this.barDataName = Array.from(document.getElementsByClassName('popup-field--input-bar'))
        this.barDataValue = Array.from(document.getElementsByClassName('popup-field--input-valuebar'))
        this.titleData = Array.from(document.querySelectorAll('.popup-field--title-input'))
        this.textData = document.querySelector('.form-box__text-field')
    }

    addBarField(){
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
        fieldName.setAttribute("name", `bar-name${barFields.length + 1}`)
        fieldName.setAttribute("id", `name-bar${barFields.length + 1}`)
        fieldName.value = ""

        
        //settings to value fields
        let fieldValue = lastBarBox.lastElementChild.firstElementChild
        fieldValue.setAttribute("for", `bar${barFields.length + 1}`)
        fieldValue.textContent = `Valor ${barFields.length + 1}`
        fieldValue = lastBarBox.lastElementChild.lastElementChild
        fieldValue.setAttribute("name", `value-bar${barFields.length + 1}`)
        fieldValue.setAttribute("id", `bar${barFields.length + 1}`)
        fieldValue.value = ""

        let formContainer = containerButtons.parentNode
        formContainer.insertBefore(lastBarBox, containerButtons)
    }

    excludeBarField(){
        const containerButtons = document.querySelector("#form-bar-buttons")
        let barFields = Array.from(document.querySelectorAll(".form-box__bar"))

        if(barFields.length == 1){
            return console.log("Valor minimo atingido")
        }

        let lastBarBox = containerButtons.previousElementSibling
        lastBarBox.parentElement.removeChild(lastBarBox)
    }

    clearFullInput(){
        const containerButtons = document.querySelector("#form-bar-buttons")
        let barFields = Array.from(document.querySelectorAll(".form-box__bar"))

        for(let i = barFields.length - 1; i > 0; i--){
            let lastBarBox = containerButtons.previousElementSibling
            lastBarBox.parentElement.removeChild(lastBarBox)
        }
    }

    addText(){
        let text = document.querySelector(".form-box__text-field")
        let paragraph = document.querySelector("#chart-area__opening-text")
        ;(text.value == "") ? paragraph.innerHTML = "Esse texto pode ser alterado ao editar o gráfico." : paragraph.innerHTML = text.value;
    }
}