let nombre = prompt("Ingrese su nombre y apellido").toLocaleUpperCase();

alert("Bienvenido: " + nombre);

let pregunta = prompt("Le interesaria comprar un articulo de nuestra colección? Ejemplo SI o NO").toLocaleUpperCase();

let pantalon = 8000;
let remera = 7000;
let zapatos = 20000;
let campera = 30000;

if (pregunta == "SI") {
    let orden = prompt("Que producto le interesaria comprar? EJ: Pantalon/Remera/Zapatos/Campera").toLocaleLowerCase();
    switch (orden) {
        case "pantalon":
            alert("Gracias por su comprar, su total es: " + pantalon);
            break;
        case "remera":
            alert("Gracias por su comprar, su total es: " + remera);
            break;
        case "zapatos":
            alert("Gracias por su comprar, su total es: " + zapatos);
            break;    
        case "campera":
            alert("Gracias por su comprar, su total es: " + campera);
            break;
        default:
            alert("No ingreso un producto disponible");
            break;
    }
} else {
    alert ("Gracias por su visita, Lo Esperamos nuevamente");
}

function saludar() {
    alert("Gracias: " + nombre + " " + "Su orden esta siendo procesada, lo contactaremos");
}

saludar();