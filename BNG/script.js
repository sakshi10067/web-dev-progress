function generate(adj, name, word){
    res=`${adj} ${name} ${word}`;
    return res;
}
let r=Math.random();
let f,s,t;
if (r<0.33){
    f="crazy";
}
else if (r<0.66 && r>=0.33){
    f="amazing";
}
else{
    f="fire";
}


if (r<0.33){
    s="engine";
}
else if (r<0.66 && r>=0.33){
    s="foods";
}
else{
    s="garments";
}

if (r<0.33){
    t="bros";
}
else if (r<0.66 && r>=0.33){
    t="limited";
}
else{
    t="hub";
}
console.log(generate(f,s,t));