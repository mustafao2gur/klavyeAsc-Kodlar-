let par1=document.querySelector("#par1")
let par2=document.querySelector("#par2")
let bod=document.querySelector("#bod")
console.log(par1);
console.log(par2);

document.addEventListener("keydown",change=(e)=>{
    console.log(e);
    par1.innerText="YOU Pressed any key On Keyboard" 

let renk1=Math.floor( Math.random()*255)
let renk2=Math.floor( Math.random()*255)
let renk3=Math.floor( Math.random()*255)
let renkDeseni = `rgb(${renk1},${renk2},${renk3})`;

bod.style.backgroundColor = renkDeseni;

par2.innerText = "TUŞ:"+e.key +" " +"Key Asci:" + e.keyCode 


})




let div=document.querySelector("div")



console.log(div);
