// document.body.firstChild
// #text
// document.body.childNodes[1] in console

// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]


//selecting by id, classes and more
// let boxes=document.getElementsByClassName("box");
// boxes[2].style.background="blue";
// boxes[2].style.color="white";

// let doColor=document.getElementById("redbox");
// doColor.style.backgroundColor="red";

//QUERY SELECTOR
// document.querySelector(".box").style.backgroundColor="green";

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="yellow";
})
