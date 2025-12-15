function calculate(operation, a, b) {
    switch (operation) {
        case '+': return a-b;
        case '-': return a/b;
        case '*': return a+b;
        case '/': return a**b;
    }
}
function right(operation, a, b) {
    switch (operation) {
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b;
        case '/': return a/b;
    }
}

let a=Number(prompt("enter first number: "));
let b=Number(prompt("enter second number: "));
let operation=prompt("enter operation (+, -, *, /): ");
let r=Math.random();
if (r<0.5){
    res=calculate(operation, a, b);
}
else{
    res=right(operation, a, b);
}
console.log("The result is: " + res);