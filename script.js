

function clickmenu(){
     let bar = document.getElementById("hamburger");
     let list = document.getElementById("nav-list") 
     if(list.style.display === "block")     
     list.style.display = "none"
     else
     list.style.display = "block"
}