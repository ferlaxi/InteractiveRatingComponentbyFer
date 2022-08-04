let note;
let data1 = sessionStorage.getItem("boton1");
let data2 = sessionStorage.getItem("boton2");
let data3 = sessionStorage.getItem("boton3");
let data4 = sessionStorage.getItem("boton4");
let data5 = sessionStorage.getItem("boton5");


if(data1 != null){
    note = document.getElementsByClassName("note")[0];
    note.innerHTML = "Haz seleccionado 1 de 5";
    note.className = "number padding";
} else if(data2 != null){
    note = document.getElementsByClassName("note")[0];
    note.innerHTML = "Haz seleccionado 2 de 5";
    note.className = "number padding";
} else if(data3 != null){
    note = document.getElementsByClassName("note")[0];
    note.innerHTML = "Haz seleccionado 3 de 5";
    note.className = "number padding";
} else if(data4 != null){
    note = document.getElementsByClassName("note")[0];
    note.innerHTML = "Haz seleccionado 4 de 5";
    note.className = "number padding";
} else if(data5 != null){
    note = document.getElementsByClassName("note")[0];
    note.innerHTML = "Haz seleccionado 5 de 5";
    note.className = "number padding";
}
