let prom1=new Promise((resolve, reject)=>{
    let num=Math.random();
    if (num<0.5){
        reject("number is less than 0.5");
    }
    else{
    setTimeout(()=>{
        console.log("before resolve");
        resolve("sakshi");
    }, 2000);
}
})
prom1.then((a)=>{
    console.log("after resolve", a);
}).catch((err)=>{
    console.log("error is", err);
});