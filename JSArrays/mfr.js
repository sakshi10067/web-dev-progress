const a=[10,20,30];
//map
// let newArr=a.map((value, index, array)=>{
//     return value*value;
// });
// console.log(a);
// console.log(newArr);


//fiter
// function greaterThan15(value){
//     return value>15;
// }
// let newArr=a.filter(greaterThan15);
// console.log(a);
// console.log(newArr);

//reduce
let arr=[2,4,5,6,7];
const red=(a,b)=>{
    return a+b;
}
let sum= arr.reduce(red);
console.log(sum);

