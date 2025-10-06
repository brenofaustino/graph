import { GraphModel } from "../Model/graph.model.js"
import { GraphView } from "../View/graph.view.js"

export class GraphController{
    constructor(){
        this.model = new GraphModel()
        this.view = new GraphView()
    }

    renderText(){
        this.view.setNewDataDOM() 
        this.model.filterData(this.view.barDataName, this.view.barDataValue, this.view.titleData, this.view.textData)
        
        this.view.addText()

        this.view.chartBox.innerHTML = ""
        let chart = new ApexCharts(this.view.chartBox, this.model.graphOptions())
        chart.render()
    }

    load(){
        let savedData = this.model.getSavedData()
        if(savedData){
            this.view.clearFullInput()

            this.view.textData.innerHTML = savedData.text

            for(let i = 0; i < savedData.title.length; i++){
                this.view.titleData[i].value = savedData.title[i]
            }

            for(let j = 0; j < savedData.bar.length; j++){
                if (j < savedData.bar.length - 1){
                    this.view.addBarField()
                    this.view.setNewDataDOM()
                }
                this.view.barDataName[j].value = savedData.bar[j].x
                this.view.barDataValue[j].value = savedData.bar[j].y
            }
        }
    }

    init(){
        this.load()
        this.renderText()

        this.view.form.addEventListener("reset", () => {
            this.view.clearFullInput()
            this.view.dialogbox.close()
        })

        this.view.form.addEventListener("submit", () => {
            this.renderText()
        })

        this.view.dialog.addEventListener("click", () => {
            this.load()
            this.view.dialogbox.showModal()
        })

        this.view.addButton.addEventListener("click", () => {
            this.view.addBarField()
        })

        this.view.delButton.addEventListener("click", () => {
            this.view.excludeBarField()
        })

        
    }
}