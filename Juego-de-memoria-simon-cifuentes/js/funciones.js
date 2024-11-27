//VARIABLE GLOBALES
const d = document;
let imgN1 = [
{ nombre: "1", url: "img/sodapdf-converted (1).png"},

{ nombre: "2", url: "img/sodapdf-converted (2).png" },

{ nombre: "3", url: "img/sodapdf-converted (3).png" },

 { nombre: "4", url: "img/sodapdf-converted (4).png" },

 { nombre: "5", url: "img/sodapdf-converted (5).png" },

 { nombre: "6", url: "img/sodapdf-converted (6).png" },

 { nombre: "7", url: "img/sodapdf-converted (7).png" },

 { nombre: "8", url: "img/sodapdf-converted (8).png" },



 { nombre: "1", url: "img/sodapdf-converted (1).png"},

 { nombre: "2", url: "img/sodapdf-converted (2).png" },
 
 { nombre: "3", url: "img/sodapdf-converted (3).png" },
 
  { nombre: "4", url: "img/sodapdf-converted (4).png" },
 
  { nombre: "5", url: "img/sodapdf-converted (5).png" },
 
  { nombre: "6", url: "img/sodapdf-converted (6).png" },
 
  { nombre: "7", url: "img/sodapdf-converted (7).png" },
 
  { nombre: "8", url: "img/sodapdf-converted (8).png" }
];




let imgN2 = [
    { nombre: "1", url: "img/sodapdf-converted (1).png"},

    { nombre: "2", url: "img/sodapdf-converted (2).png" },
    
    { nombre: "3", url: "img/sodapdf-converted (3).png" },
    
     { nombre: "4", url: "img/sodapdf-converted (4).png" },
    
     { nombre: "5", url: "img/sodapdf-converted (5).png" },
    
     { nombre: "6", url: "img/sodapdf-converted (6).png" },
    
     { nombre: "7", url: "img/sodapdf-converted (7).png" },
    
     { nombre: "8", url: "img/sodapdf-converted (8).png" },
 
     { nombre: "P9", url: "img/sodapdf-converted (15).png" },
 
     { nombre: "P10", url: "img/sodapdf-converted (14).png" },

 
 { nombre: "1", url: "img/sodapdf-converted (1).png"},

 { nombre: "2", url: "img/sodapdf-converted (2).png" },
 
 { nombre: "3", url: "img/sodapdf-converted (3).png" },
 
  { nombre: "4", url: "img/sodapdf-converted (4).png" },
 
  { nombre: "5", url: "img/sodapdf-converted (5).png" },
 
  { nombre: "6", url: "img/sodapdf-converted (6).png" },
 
  { nombre: "7", url: "img/sodapdf-converted (7).png" },
 
  { nombre: "8", url: "img/sodapdf-converted (8).png" },
 
 { nombre: "P9", url: "img/sodapdf-converted (15).png" },
 
 { nombre: "P10", url: "img/sodapdf-converted (14).png" }

];



let imgN3 = [
    { nombre: "1", url: "img/sodapdf-converted (1).png"},

    { nombre: "2", url: "img/sodapdf-converted (2).png" },
    
    { nombre: "3", url: "img/sodapdf-converted (3).png" },
    
     { nombre: "4", url: "img/sodapdf-converted (4).png" },
    
     { nombre: "5", url: "img/sodapdf-converted (5).png" },
    
     { nombre: "6", url: "img/sodapdf-converted (6).png" },
    
     { nombre: "7", url: "img/sodapdf-converted (7).png" },
    
     { nombre: "8", url: "img/sodapdf-converted (8).png" },
    
    { nombre: "P9", url: "img/sodapdf-converted (15).png" },
    
    { nombre: "P10", url: "img/sodapdf-converted (14).png" },
    
    { nombre: "P11", url: "img/sodapdf-converted (10).png" },
    
    { nombre: "P12", url: "img/sodapdf-converted (22).png" },



{ nombre: "1", url: "img/sodapdf-converted (1).png"},

{ nombre: "2", url: "img/sodapdf-converted (2).png" },

{ nombre: "3", url: "img/sodapdf-converted (3).png" },

 { nombre: "4", url: "img/sodapdf-converted (4).png" },

 { nombre: "5", url: "img/sodapdf-converted (5).png" },

 { nombre: "6", url: "img/sodapdf-converted (6).png" },

 { nombre: "7", url: "img/sodapdf-converted (7).png" },

 { nombre: "8", url: "img/sodapdf-converted (8).png" },

{ nombre: "P9", url: "img/sodapdf-converted (15).png" },

{ nombre: "P10", url: "img/sodapdf-converted (14).png" },

{ nombre: "P11", url: "img/sodapdf-converted (10).png" },

{ nombre: "P12", url: "img/sodapdf-converted (22).png" },
];


let imagenNivel;
let nombreIMG = [];
let posIMG = [];
let tablero = d.querySelector(".tablero"); //TABLERO DEL JUEGO
let aciertos = 0;
let totalIntentos =0
let totaltiempo=0
let tiempoSobrante= 0
let intentos = 0;
let nivel = 1;
let tiempo = 60;
let tiempoTranscurrido;
let btnIniciar = d.querySelector(".btn-iniciar");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarNivel = d.querySelector(".nivel");
let mostrarTiempo = d.querySelector(".tiempo");
let estoyJugando = false;






let sonidoSeleccionar = new Audio("sonido/selecionar.mp3");
let sonidoCorrecto = new Audio("sonido/correcto.mp3");
let sonidoIncorrecto = new Audio("sonido/incorrecto.mp3");
let sonidoPerdida = new Audio("sonido/perder.mp3");
let sonidoGanado = new Audio("sonido/ganar.mp3");


let mostrarjugador = document.querySelector(".jugador")
let tabla = d.querySelector(".table tbody")

d.addEventListener("DOMContentLoaded",()=> {
    mostrarDatos()
})

500

//Evento de inicio de juego
btnIniciar.addEventListener("click", function () {
    if (estoyJugando == false && nivel == 1) {
        ventanaMODAL();
        
    } else if (estoyJugando == false && nivel == 2) {
        estoyJugando = true;
        Nivel2();
    } else if (estoyJugando == false && nivel == 3) {
        estoyJugando = true;
        Nivel3();
    }
});


//FUNCION PARA AGREGA LAS IMAGENES AL TABLERO
function agregarImagenes() {

    if (nivel == 1) {
        imagenNivel = imgN1
    }
    else if (nivel == 2) {
        imagenNivel = imgN2
    }
    else if (nivel == 3) {
        imagenNivel = imgN3
    }

    //poner las imagenes aleatorias
    imagenNivel.sort(() => Math.random() - 0.5);

    imagenNivel.forEach((img, i) => {
        let div = d.createElement("div"); //CREAMOS ETIQUETA DIV
        div.className = "col-3"; //LA CLASE DEBE SER DE BOOSTRAP
        let imagen = d.createElement("img"); //CREAMOS ETIQUETA DE IMAGEN
        imagen.className = "img-fluid altura"; //CLASE PARA ADAPTAR LA IMG
        imagen.src = "img/oculta (1).png"; //UBICACION DE LA IMAGEN
        imagen.id = i; //Agregar ID a las imagenes
        imagen.addEventListener("click", mostrarImagenes);
        div.appendChild(imagen); //AGREGRA LA IMAGEN AL DIV
        tablero.appendChild(div); // AGREGAR EL DIV AL TABLERO
    });

}

//Funcion para mostrar imagenes ocultas
function mostrarImagenes() {
    sonidoSeleccionar.play();
    let imagenID = this.getAttribute("id");
    //Mostrar imagen
    this.src = imagenNivel[imagenID].url;
    nombreIMG.push(imagenNivel[imagenID].nombre);
    posIMG.push(imagenID);

    //Validad si se muestran dos imagenes
    if (nombreIMG.length == 2) {
        setTimeout(compararImagenes, 200);
        // compararImagenes();
    }
}

//funcion para compara las imagenes
function compararImagenes() {
    let imagenesTablero = document.querySelectorAll(".tablero .col-3 img");
    //Validar si las imagenes se llaman igual
    if (nombreIMG[0] == nombreIMG[1]) {
        if (posIMG[0] != posIMG[1]) {
            sonidoCorrecto.play();
            imagenesTablero[posIMG[0]].src = "img/ok.png"
            imagenesTablero[posIMG[1]].src = "img/ok.png"
            imagenesTablero[posIMG[0]].removeEventListener("click", mostrarImagenes);
            imagenesTablero[posIMG[1]].removeEventListener("click", mostrarImagenes);
            aciertos++;
            mostrarAciertos.textContent = aciertos;
        } else {
            alert("Debes seleccionar otra imagen");
            imagenesTablero[posIMG[0]].src = "img/oculta (1).png"
        }

    } else {
        sonidoIncorrecto.play();
        imagenesTablero[posIMG[0]].src = "img/oculta (1).png"
        imagenesTablero[posIMG[1]].src = "img/oculta (1).png"
    }
    //Guardar los intentos
    intentos++;
    mostrarIntentos.textContent = intentos;
    //Reiniciar las variables
    nombreIMG = [];
    posIMG = [];


    //Comprobar si se adivinaron todas las imagenes
    if (nivel == 1 && aciertos == 8) {
        totalIntentos += intentos
        totaltiempo +=tiempo
        tiempoSobrante += (60 - tiempo)
        obtenerDatos ()
        sonidoGanado.play();
        setTimeout(() => {
            nivel++;
            alert("Felicidades pasaste al nivel " + nivel);
            mostrarNivel.textContent = nivel;
            intentos = 0;
            mostrarIntentos.textContent = intentos;
            aciertos = 0;
            mostrarAciertos.textContent = aciertos;
            clearInterval(tiempoTranscurrido);
            tiempo = 50;
            mostrarTiempo.textContent = tiempo;

            estoyJugando = false;
            LimpiarTablero();
        }, 2000);


    } else if (nivel == 2 && aciertos == 10) {
        sonidoGanado.play();
        setTimeout(() => {
            nivel++;
            alert("Felicidades, pasaste al nivel " + nivel);
            mostrarNivel.textContent = nivel;
            intentos = 0;
            mostrarIntentos.textContent = intentos;
            aciertos = 0;
            mostrarAciertos.textContent = aciertos;
            clearInterval(tiempoTranscurrido);
            tiempo = 55;
            mostrarTiempo.textContent = tiempo;

            estoyJugando = false;
            LimpiarTablero();
        }, 2000);

    } else if (nivel == 3 && aciertos == 12) {
        sonidoGanado.play();
        alert("Felicidades has pasado el juego");
        setTimeout(() => {
            location.reload();
        }, 3000);

    }
}


function Nivel1() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    TiempoDeJuego();
}
function Nivel2() {
    agregarImagenes();
    TiempoDeJuego();
}
function Nivel3() {
    agregarImagenes();
    TiempoDeJuego();
}


function TiempoDeJuego() {
    tiempoTranscurrido = setInterval(() => {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
            //alert("El tiempo se agota!!");

            mostrarTiempo.classList.add("tiempo-agotado");
        } else if (tiempo == 0) {
            clearInterval(tiempoTranscurrido);
            sonidoPerdida.play();

            setTimeout(() => {
                alert("El tiempo se agotó");
                estoyJugando == false;
                location.reload();
            }, 3000);

        }
    }, 1000);
}

function LimpiarTablero() {
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img) => {
        img.remove();
    });
}

//mostrar ventana modal                                
function ventanaMODAL(){

let mostrarModal= document.querySelector("#exampleModal");
let cerrarModal = document.querySelectorAll(".cerrar")
let inputJugdor = d.querySelector (".nombre-jugador")
let btnJugador = d.querySelector (".registar-jugador")
cerrarModal.forEach((btn)=>{
btn.addEventListener("click",()=>{
    mostrarModal.classList.remove("show")
    mostrarModal.style.display = "none"
})
})
mostrarModal.classList.add("show")
mostrarModal.style.display ="block"
btnJugador.addEventListener("click",()=>{
    mostrarjugador.textContent = inputJugdor.value
    mostrarModal.classList.remove("show")
    mostrarModal.style.display = "none"
    //iniciar nivel 1
    estoyJugando = true;
        Nivel1();
})
}

//oculta