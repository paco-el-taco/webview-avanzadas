// script.js (type="module")

const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".botones button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.dataset.value;
        const accion = boton.dataset.action;

        if (valor) insertar(valor);
        if (accion === "clear") borrarTodo();
        if (accion === "delete") borrarUltimo();
        if (accion === "calculate") calcular();
    });
});

function insertar(valor) {
    pantalla.value += valor;
}

function borrarTodo() {
    pantalla.value = "";
}

function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = "Error";
    }
}

