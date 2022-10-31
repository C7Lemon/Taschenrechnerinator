

function dis(val){
    document.getElementById("disp").value+=val
}
function solve(){
    let x = document.getElementById("disp").value
    let y = eval(x)
    document.getElementById("disp").value = y
}
function clr(){
    document.getElementById("disp").value = ""
}


/*function clear() {
    document.getElementById("output").innerHTML = "0";
}
function fordisplay(value) {
    //removeZero()
    document.getElementById("output").innerHTML += value;
}*/