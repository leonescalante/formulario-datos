function saludo() {

    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;

    document.getElementById("mensaje").textContent =
        "Hola, " + nombre + " " + apellido + " Buenas tardes";
}

function calculo_nota() {

    let teoria = parseFloat(
        document.getElementById("nota_teorica").value
    );

    let practica = parseFloat(
        document.getElementById("nota_practica").value
    );

    let suma = teoria + practica;

    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;

    document.getElementById("nota_sumada").textContent =
        "El promedio de " + nombre + " " + apellido + " es " + suma;
}
