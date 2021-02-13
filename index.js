let btn = document.getElementById("work-btn");
let overlay = document.getElementById("overlay");

btn.addEventListener('click', ()=>{
    overlay.style.display='grid';
    overlay.classList.add('animate-overlay');
})  

function btnClick(){
    console.log("onclick trigger");
}