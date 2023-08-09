
const decrement = document.getElementById("one");
const increment = document.getElementById("two");
const reset = document.getElementById("three");


const countElement = document.getElementById("count");


let count = 0;

function incrementby1(){
    count ++;
    countElement.textContent = count;
}

increment.addEventListener("click" ,incrementby1);

function decrementby1(){
    --count;
    countElement.textContent = count;
}

decrement.addEventListener("click" , decrementby1);

function  value(){
    count = 0;
    countElement.textContent = count;
     
}

reset.addEventListener("click" , value);

