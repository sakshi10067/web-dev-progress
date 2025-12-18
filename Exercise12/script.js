let num=Math.random();
let boxes=document.getElementsByClassName("box");
if (num<0.2){
    boxes[0].style.backgroundColor="red";
    boxes[1].style.backgroundColor="green";
    boxes[2].style.backgroundColor="blue";
    boxes[3].style.backgroundColor="yellow";
    boxes[4].style.backgroundColor="black";
}
else if (num>0.2 && num<0.4){
    boxes[0].style.backgroundColor="green";
    boxes[1].style.backgroundColor="red";
    boxes[2].style.backgroundColor="blue";
    boxes[3].style.backgroundColor="yellow";
    boxes[4].style.backgroundColor="black";

}
else if (num>0.4 && num<0.6){
    boxes[0].style.backgroundColor="yellow";
    boxes[1].style.backgroundColor="green";
    boxes[2].style.backgroundColor="blue";
    boxes[3].style.backgroundColor="red";
    boxes[4].style.backgroundColor="black";
}
else if (num>0.6 && num<0.8){
    boxes[0].style.backgroundColor="blue";
    boxes[1].style.backgroundColor="green";
    boxes[2].style.backgroundColor="red";
    boxes[3].style.backgroundColor="yellow";
    boxes[4].style.backgroundColor="black";
}
else{
    boxes[0].style.backgroundColor="black";
    boxes[1].style.backgroundColor="green";
    boxes[2].style.backgroundColor="red";
    boxes[3].style.backgroundColor="yellow";
    boxes[4].style.backgroundColor="blue";
}