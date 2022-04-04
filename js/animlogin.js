var animEnd=1;
var animStart=0;
var id=0;
Login=document.getElementById("section-di-accesso");
Game=document.getElementById("section-di-gioco");
button=document.getElementById("accediBtn");
button.addEventListener("click",start);


function start(){
    id=setInterval(anim,200)
    usernameSet();
    Game.style.visibility="visible";
    Game.style.display="block";
}
function usernameSet (){
    document.getElementById("user").innerText=document.getElementById("username").value;
}
function anim (){
    if(animEnd < 0 ) clearInterval(id); Login.style.display="none";
    Login.style.opacity=animEnd-=0.1;
    Game.style.opacity=animStart+=0.1
}

