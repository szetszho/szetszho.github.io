let btn = document.getElementById("work-btn");
let overlay = document.getElementById("overlay");

btn.addEventListener('click', ()=>{
    overlay.style.display='grid';
    overlay.classList.add('animate-overlay');
})  


let dropmenu = document.getElementById("dropmenu");
let dropbtn = document.getElementById("dropbtn");

function menuClick(){
    if(dropmenu.style.display == "block"){
    dropmenu.style.display="none";
    dropbtn.innerHTML ="menu";
    }
    else{
    dropmenu.style.display = "block";
    dropbtn.innerHTML ="menu_open";
    }
}

window.addEventListener('click', function(e){
    console.log(e);
    if (!dropmenu.contains(e.target)&& !dropbtn.contains(e.target)){
        dropmenu.style.display="none";
        dropbtn.innerHTML ="menu";
    }
})