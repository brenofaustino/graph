(function(){
    const dialog = document.querySelector("#dialog-button")
    const cancelButton = document.getElementById("cancel");
    const dialogbox = document.querySelector("#dialog")
    dialog.addEventListener("click", function(){
        dialogbox.showModal()
    })
    cancelButton.addEventListener("click", function(){
        dialogbox.close()
    })


})()