import { chartGenerator, loadInputValue, addBarField, excludeBarField} from "./factory.js";

const dialog = document.querySelector("#dialog-button")
const addButton = document.getElementById("add")
const delButton = document.getElementById("del")
const confirmButton = document.getElementById("confirm")
const cancelButton = document.getElementById("cancel")
const dialogbox = document.querySelector("#dialog")
const chartBox = document.querySelector('#chart')

dialog.addEventListener("click", function(){
    loadInputValue()
    dialogbox.showModal()
})

cancelButton.addEventListener("click", function(){
    dialogbox.close()
})

confirmButton.addEventListener("click", function(){
    chartBox.innerHTML = ""
    let chart = new ApexCharts(chartBox, chartGenerator());
    chart.render();
})

addButton.addEventListener("click", function() {
    addBarField()
})

delButton.addEventListener("click", function(){
    excludeBarField()
})

window.addEventListener("load", function(){
    chartBox.innerHTML = ""
    loadInputValue()
    let chart = new ApexCharts(chartBox, chartGenerator());
    chart.render();
})