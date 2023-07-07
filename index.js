const page1=document.getElementById("container");
const page2=document.getElementById("container2");

document.getElementById("btn1").addEventListener('click',()=>{
    page1.classList.add("hide");
    page2.classList.remove("hide");
})
document.getElementById("btn2").addEventListener('click',()=>{
    page1.classList.remove("hide");
    page2.classList.add("hide");
})
