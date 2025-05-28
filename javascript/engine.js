import { chartGenerator, setInputValue } from "./factory.js";

const dialog = document.querySelector("#dialog-button")
const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");
const dialogbox = document.querySelector("#dialog")

dialog.addEventListener("click", function(){
    setInputValue()
    dialogbox.showModal()
})

cancelButton.addEventListener("click", function(){
    dialogbox.close()
})

confirmButton.addEventListener("click", function(){
    document.querySelector('#chart').innerHTML = ""
    let chart = new ApexCharts(document.querySelector('#chart'), chartGenerator());
    chart.render();
})

window.addEventListener("load", function(){
    document.querySelector('#chart').innerHTML = ""
    let chart = new ApexCharts(document.querySelector('#chart'), chartGenerator());
    chart.render();
})