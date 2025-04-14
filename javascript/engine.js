import { dataFiltering } from "./factory.js";

const dialog = document.querySelector("#dialog-button")
const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");
const dialogbox = document.querySelector("#dialog")

dialog.addEventListener("click", function(){
    dialogbox.showModal()
})

cancelButton.addEventListener("click", function(){
    dialogbox.close()
})

confirmButton.addEventListener("click", () => {
    let data = Array.from(document.querySelectorAll(".popup-field--input"))
    let chart = new ApexCharts(document.querySelector('#chart'), dataFiltering(data));
    chart.render();
})