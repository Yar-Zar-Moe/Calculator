let btn = document.querySelectorAll(".btn");
let equal = document.querySelector("#equal");
let display = document.querySelector("#display");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#backSpace");
let arr = [];

btn.forEach((btn)=>{
    btn.classList.add("border", "border-info-subtle")
})

let operator = ["+", "-", "×", "÷"];

btn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        let clickNumber = btn.textContent;
        let lastItem = arr[arr.length-1];

        if(clickNumber == "=" || clickNumber == "⌫"){
            return;
        }
        if(operatorCheck(lastItem) && operatorCheck(clickNumber)){
            return;
        }
        arr.push(clickNumber)
        display.innerHTML = arr.join("");
    })
})

equal.addEventListener("click", ()=>{
    let lastItem = arr[arr.length - 1];
    if(operatorCheck(lastItem)){
        arr.pop();
    }
    
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == "÷"){
            arr[index] = "/";
        }
        if(arr[index] == "×"){
            arr[index] = "*";
        }       
    }
    let str = arr.join("");
    let evalute = eval(str);
    display.innerHTML = evalute;
    arr = [];
    arr.push(evalute)
})

clear.addEventListener("click", ()=>{
    arr = [];
    display.innerHTML = 0;
})

backSpace.addEventListener("click", ()=>{
        arr.pop();
        display.innerHTML = arr.join("");
        if(arr.length == 0){
            display.innerHTML = 0;
        }   
})

let operatorCheck = (op) =>{
    for (let index = 0; index < operator.length; index++) {
        const element = operator[index];
        if(op == element){
            return true;
        }
    }
}
