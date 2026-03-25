async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data=await x.json();
    // let tex=await x.text();
    console.log(data);
    // console.log(tex);
    return 455;
}

async function main(){
console.log("start");
let data=await getData();
console.log("after calling function");
console.log(data);
console.log("end");
}
main();