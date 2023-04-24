const rango = document.querySelector("#rango")
const puntaje = document.querySelector("#puntaje")

rango.oninput = () => {
    puntaje.innerHTML = rango.value
}