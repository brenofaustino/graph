import { chartGenerator, setInputValue } from "./factory.js";

const dialog = document.querySelector("#dialog-button")
const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");
const dialogbox = document.querySelector("#dialog")
const chartBox = document.querySelector('#chart')

dialog.addEventListener("click", function(){
    setInputValue()
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

window.addEventListener("load", function(){
    chartBox.innerHTML = ""
    setInputValue()
    let chart = new ApexCharts(chartBox, chartGenerator());
    chart.render();
})