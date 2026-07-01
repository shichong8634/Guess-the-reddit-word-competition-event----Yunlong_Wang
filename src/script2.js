const selectBox = document.getElementById("selectBox");

selectBox.onchange = function () {
    const url = this.value;
    if(url){
        window.location.href = url;
    }
}
