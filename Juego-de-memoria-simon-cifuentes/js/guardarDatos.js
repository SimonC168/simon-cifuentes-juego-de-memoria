 let nombreJugador = d.querySelector(".jugador")
let listaJugadores = "jugadores"

function obtenerDatos (){
let datosJugador= {
    "nombre" : nombreJugador.textContent,
    "intentos": totalIntentos,
    "tiempoTotal" : totaltiempo,
    "tiempoSobrante" : tiempoSobrante       
}
console.log(datosJugador)
guardardatos(datosJugador)

}

function guardardatos  (datos){

    let jugadores =[]

    let datosprevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosprevios != null ) {
      
        jugadores= datosprevios
        
    }
    jugadores.push(datos)
    localStorage.setItem(listaJugadores, JSON.stringify( jugadores))


}
function mostrarDatos () {
    let jugadores =[]

    let datosprevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosprevios != null ) {
      
        jugadores= datosprevios
        
    }
   jugadores.sort((a, b)=>{
if (a.tiempoTotal < b.tiempoTotal) {
    return -1
    
}
if (a.intentos < b.intentos) {
    return 1
    
}
   }) 
    
    
    
    
    jugadores.forEach((jugador, i )=> {

        let fila = d.createElement("tr")
        fila.innerHTML= `
        <td> ${i+1} </td>
         <td> ${jugador.nombre} </td>
         <td> ${jugador.tiempoTotal} </td>
         <td> ${jugador.intentos} </td>
         <td> ${jugador.tiempoSobrante} </td>

        `
        tabla.appendChild(fila)
    });



}