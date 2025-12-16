let num=Number(prompt("Enter a number to calculate its factorial:"));
let fact=1;
for (let i=num; i>0; i--){
    fact=fact*i;
}
console.log(fact);