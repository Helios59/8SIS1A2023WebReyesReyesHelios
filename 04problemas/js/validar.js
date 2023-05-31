function calcularGanancia() {
  const capital = parseFloat(document.getElementById("capital").value);
  if (isNaN(capital) || capital < 0 || capital > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de capital. El máximo permitido es 300,000.");
    return;
  }

  const ganancia = capital * 0.02;
  document.getElementById("ganancia").textContent = `La ganancia después de un mes será: $${ganancia.toFixed(2)}`;
}

function calcularComisiones() {
  const ventas = parseFloat(document.getElementById("ventas").value);
  if (isNaN(ventas) || ventas < 0 || ventas > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de ventas. El máximo permitido es 300,000.");
    return;
  }

  const sueldoBase = parseFloat(document.getElementById("sueldo-base").value);
  if (isNaN(sueldoBase) || sueldoBase < 0 || sueldoBase > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de sueldo base. El máximo permitido es 300,000.");
    return;
  }

  const comisiones = ventas * 0.1;
  const total = sueldoBase + comisiones;
  document.getElementById("comisiones").textContent = `Comisiones: $${comisiones.toFixed(2)}`;
  document.getElementById("total").textContent = `Total a recibir: $${total.toFixed(2)}`;
}

function calcularDescuento() {
  const totalCompra = parseFloat(document.getElementById("total-compra").value);
  if (isNaN(totalCompra) || totalCompra < 0 || totalCompra > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de total de compra. El máximo permitido es 300,000.");
    return;
  }

  const descuento = totalCompra * 0.15;
  const totalPagar = totalCompra - descuento;
  document.getElementById("total-pagar").textContent = `Total a pagar: $${totalPagar.toFixed(2)}`;
}

function calcularCalificacionFinal() {
  const califParcial1 = parseFloat(document.getElementById("calif-parcial1").value);
  if (isNaN(califParcial1) || califParcial1 < 0 || califParcial1 > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de calificación parcial 1. El máximo permitido es 300,000.");
    return;
  }

  const califParcial2 = parseFloat(document.getElementById("calif-parcial2").value);
  if (isNaN(califParcial2) || califParcial2 < 0 || califParcial2 > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de calificación parcial 2. El máximo permitido es 300,000.");
    return;
  }

  const califParcial3 = parseFloat(document.getElementById("calif-parcial3").value);
  if (isNaN(califParcial3) || califParcial3 < 0 || califParcial3 > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de calificación parcial 3. El máximo permitido es 300,000.");
    return;
  }

  const califExamen = parseFloat(document.getElementById("calif-examen").value);
  if (isNaN(califExamen) || califExamen < 0 || califExamen > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de calificación del examen. El máximo permitido es 300,000.");
    return;
  }

  const califTrabajo = parseFloat(document.getElementById("calif-trabajo").value);
  if (isNaN(califTrabajo) || califTrabajo < 0 || califTrabajo > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de calificación del trabajo. El máximo permitido es 300,000.");
    return;
  }

  const promedioParciales = (califParcial1 + califParcial2 + califParcial3) / 3;
  const califFinal = promedioParciales * 0.55 + califExamen * 0.30 + califTrabajo * 0.15;

  document.getElementById("calificacion-final").textContent = `Calificación Final: ${califFinal.toFixed(2)}`;
}

function calcularPorcentaje() {
  const totalEstudiantes = parseFloat(document.getElementById("total-estudiantes").value);
  if (isNaN(totalEstudiantes) || totalEstudiantes < 0 || totalEstudiantes > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de total de estudiantes. El máximo permitido es 300,000.");
    return;
  }

  const totalHombres = parseFloat(document.getElementById("total-hombres").value);
  if (isNaN(totalHombres) || totalHombres < 0 || totalHombres > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de total de hombres. El máximo permitido es 300,000.");
    return;
  }

  const porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
  const porcentajeMujeres = 100 - porcentajeHombres;

  document.getElementById("porcentaje-hombres").textContent = `Porcentaje de Hombres: ${porcentajeHombres.toFixed(2)}%`;
  document.getElementById("porcentaje-mujeres").textContent = `Porcentaje de Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
}

function calcularEdad() {
  const anioNacimiento = parseInt(document.getElementById("anio-nacimiento").value);
  if (isNaN(anioNacimiento) || anioNacimiento < 0 || anioNacimiento > 300000) {
    alert("Por favor, ingresa un número válido y no negativo en el campo de año de nacimiento. El máximo permitido es 300,000.");
    return;
  }

  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  const edad = anioActual - anioNacimiento;

  document.getElementById("edad").textContent = `Edad: ${edad} años`;
}

function borrarFormulario() {
  document.getElementById("problem-form").reset();
  document.getElementById("ganancia").textContent = "";
  document.getElementById("comisiones").textContent = "";
  document.getElementById("total").textContent = "";
  document.getElementById("total-pagar").textContent = "";
  document.getElementById("calificacion-final").textContent = "";
  document.getElementById("porcentaje-hombres").textContent = "";
  document.getElementById("porcentaje-mujeres").textContent = "";
  document.getElementById("edad").textContent = "";
}



  
  