// console.log("harry is good");
// console.log("sakshi is good");

// setTimeout(()=>
// {
//     console.log("this is setTimeout");
// },2000);

// console.log("this is the end of the code");

const callback=(arg)=>{
    console.log(arg);
}

const loadScript=(src, callback)=>{
    let script=document.createElement("script");
    script.src=src;
    script.onload= callback("sakshi");
    document.head.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js", callback);