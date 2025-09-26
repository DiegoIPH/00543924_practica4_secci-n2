function calendario(diaActual){
    switch(diaActual){
        case "Lunes":
            return "Debo atender un cliente especifico."
            break;
        case "Martes":
            return "Visitar agencia fuera de la ciudad."
            break;
        case "Miercoles":
            return "Debo llevar a mi hija al ballet."
            break;
        case "Jueves":
            return "Debo priorizar entregas de desarrollo."
            break;
        case "Viernes":
            return "Debo atender problemas de manera remota. "
            break;
        case "Sabado":
            return "Debo hacer lo que mi esposa quiera. "
            break;
        default:
            return "Ese no es un día válido. Por favor, ingresa un día de la semana.";
    }
}


function mostrarTarea() {
    let diaIngresado = document.getElementById('diaInput').value;
    let diaNormalizado = diaIngresado.charAt(0).toUpperCase() + diaIngresado.slice(1).toLowerCase();
    let tareaDelDia = calendario(diaNormalizado);
    document.getElementById('resultado').textContent = tareaDelDia;
}