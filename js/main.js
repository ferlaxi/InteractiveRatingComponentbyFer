let boton1 = document.getElementsByClassName("note1")[0];

boton1.addEventListener("click", CambioDeColor1);
function CambioDeColor1 (){
    boton2.classList.remove("orange");
    boton3.classList.remove("orange");
    boton4.classList.remove("orange");
    boton5.classList.remove("orange");
    boton1.className = "orange note1";
    sessionStorage.setItem("boton1", 1);
 }

let boton2 = document.getElementsByClassName("note2")[0];

boton2.addEventListener("click", CambioDeColor2);
function CambioDeColor2 (){
    boton1.classList.remove("orange");
    boton3.classList.remove("orange");
    boton4.classList.remove("orange");
    boton5.classList.remove("orange");
    boton2.className = "orange note2";
    sessionStorage.setItem("boton2", 2);
}

let boton3 = document.getElementsByClassName("note3")[0];

boton3.addEventListener("click", CambioDeColor3);
function CambioDeColor3 (){
    boton1.classList.remove("orange");
    boton2.classList.remove("orange");
    boton4.classList.remove("orange");
    boton5.classList.remove("orange");
    boton3.className = "orange note3";
    sessionStorage.setItem("boton3", 3);
}
 
let boton4 = document.getElementsByClassName("note4")[0];

boton4.addEventListener("click", CambioDeColor4);
function CambioDeColor4 (){
    boton1.classList.remove("orange");
    boton2.classList.remove("orange");
    boton3.classList.remove("orange");
    boton5.classList.remove("orange");
    boton4.className = "orange note4";
    sessionStorage.setItem("boton4", 4);
}

let boton5 = document.getElementsByClassName("note5")[0];

boton5.addEventListener("click", CambioDeColor5);
function CambioDeColor5 (){
    boton1.classList.remove("orange");
    boton2.classList.remove("orange");
    boton3.classList.remove("orange");
    boton4.classList.remove("orange");
    boton5.className = "orange note5";
    sessionStorage.setItem("boton5", 5);
}