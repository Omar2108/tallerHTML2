
const cambiar = () => {
    
    let cambio = document.getElementById("cambio").value;

    switch (cambio) {
        case "1":
            document.body.style.backgroundColor ="#f4f6f5";
            break;
        case "2":
            document.body.style.backgroundColor ="#40df82";
            break;
        case "3":
            document.body.style.backgroundColor ="#087bcd";
            break; 
        case "4":
            document.body.style.backgroundColor ="#cd0808";
            break; 
        default:
            document.body.style.backgroundColor ="#FFFFFF";
            break;
    }
    

}

const mostrar = () => {
    var ocultar = document.getElementById("ocultar");
    ocultar.style.display = "block";  
}

const ocultar = () => {
    const ocultar = document.getElementById("ocultar");
    ocultar.style.display = "none";

}