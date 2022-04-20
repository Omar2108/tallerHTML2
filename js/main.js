
const tema = document.getElementsByClassName("tema");
console.log(tema);
var cambio = document.querySelectorAll("#cambio").innerHTML;

let cambiar = () =>{
    
    switch (cambio) {
        case 1:
            tema.classList.remove();
            tema.classList.add("tema1");
            break;
        case 2:
            tema.classList.remove();
            tema.classList.add("tema2");
            break;
        case 3:
            tema.classList.remove();
            tema.classList.add("tema3");  
        default:
            
            tema.classList.add("tema");
            break;
    }

}

