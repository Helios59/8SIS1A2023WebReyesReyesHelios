function calcularGanancia() {
    const capital = parseFloat(document.getElementById("capital").value);
    const ganancia = capital * 0.02;
    document.getElementById("ganancia").textContent = `La ganancia después de un mes será: $${ganancia.toFixed(2)}`;
  }
  
  function calcularComisiones() {
    const ventas = parseFloat(document.getElementById("ventas").value);
    const sueldoBase = parseFloat(document.getElementById("sueldo-base").value);
    const comisiones = ventas * 0.1;
    const total = sueldoBase + comisiones;
    document.getElementById("comisiones").textContent = `Comisiones: $${comisiones.toFixed(2)}`;
    document.getElementById("total").textContent = `Total a recibir: $${total.toFixed(2)}`;
  }
  
  function calcularDescuento() {
    const totalCompra = parseFloat(document.getElementById("total-compra").value);
    const descuento = totalCompra * 0.15;
    const totalPagar = totalCompra - descuento;
    document.getElementById("total-pagar").textContent = `Total a pagar: $${totalPagar.toFixed(2)}`;
  }
  
  function calcularCalificacionFinal() {
    const califParcial1 = parseFloat(document.getElementById("calif-parcial1").value);
    const califParcial2 = parseFloat(document.getElementById("calif-parcial2").value);
    const califParcial3 = parseFloat(document.getElementById("calif-parcial3").value);
    const califExamen = parseFloat(document.getElementById("calif-examen").value);
    const califTrabajo = parseFloat(document.getElementById("calif-trabajo").value);
  
    const promedioParciales = (califParcial1 + califParcial2 + califParcial3) / 3;
    const califFinal = promedioParciales * 0.55 + califExamen * 0.30 + califTrabajo * 0.15;
  
    document.getElementById("calificacion-final").textContent = `Calificación Final: ${califFinal.toFixed(2)}`;
  }
  
  function calcularPorcentaje() {
    const totalEstudiantes = parseFloat(document.getElementById("total-estudiantes").value);
    const totalHombres = parseFloat(document.getElementById("total-hombres").value);
  
    const porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
    const porcentajeMujeres = 100 - porcentajeHombres;
  
    document.getElementById("porcentaje-hombres").textContent = `Porcentaje de Hombres: ${porcentajeHombres.toFixed(2)}%`;
    document.getElementById("porcentaje-mujeres").textContent = `Porcentaje de Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
  }
  
  function calcularEdad() {
    const anioNacimiento = parseInt(document.getElementById("anio-nacimiento").value);
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const edad = anioActual - anioNacimiento;
  
    document.getElementById("edad").textContent = `Edad: ${edad} años`;
  }
  
  