const fs=require("fs");
console.log("start");
// fs.writeFile("ss2.txt","hi guys again", ()=>{
//     console.log("file is created");
// });
// console.log("end");

fs.readFile("ss2.txt", (error, data)=>{
    console.log(error, data.toString());
})