let a = prompt("Enter a number: ");
let b = prompt("Enter another number");
if (isNaN(a) || isNaN(b)) {
    throw Error("ITS NOT A NUMBER");
}
try{
console.log(parseInt(a)+parseInt(b)+x);
}catch(err){
    console.log(err);
}