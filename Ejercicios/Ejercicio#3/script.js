function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0;
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if (altura >= alturaDeseada) { return dias }
    altura -= velocidadDecrecimiento;
  }
  return dias;
}

const diasCrecimmiento = calcularDiasCrecimiento(3,1,69);

document.getElementById('resultado').textContent = diasCrecimmiento;