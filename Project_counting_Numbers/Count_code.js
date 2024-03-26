


var decreseBtn=document.getElementById("decreseBtn")
var resetBtn=document.getElementById("resetBtn")
var incriseBtn=document.getElementById("incriseBtn")
var countlable=document.getElementById("countlable")
let count = 0;

function increse(){
    count=count+1;
    countlable.textContent=count
}

function reset(){
    count=0;
    countlable.textContent=count
}

function decrise(){
    count=count-1;
    countlable.textContent=count
}



