function validateInput(input) {
    const inputValue = input.value.trim();
    const inputName = input.name;

    if (inputValue === "") {
      alert(`El campo ${inputName} es obligatorio.`);
      return false;
    } else if (!/^[a-zA-Z\s]+$/.test(inputValue)) {
      alert(`Por favor, ingresa solo letras en el campo ${inputName}.`);
      return false;
    }

    return true;
  }

  function validateEmail(input) {
    const emailValue = input.value.trim();

    // Utiliza una expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      alert("El campo correo es obligatorio.");
      return false;
    } else if (!emailRegex.test(emailValue)) {
      alert("El correo ingresado es inválido.");
      return false;
    }

    return true;
  }

  function validateForm(event) {
    const nombreInput = document.querySelector('input[name="nombre"]');
    const apellidopaternoInput = document.querySelector('input[name="apellidopaterno"]');
    const apellidomaternoInput = document.querySelector('input[name="apellidomaterno"]');
    const correoInput = document.querySelector('input[name="correo"]');

    const nombreValido = validateInput(nombreInput);
    const apellidopaternoValido = validateInput(apellidopaternoInput);
    const apellidomaternoValido = validateInput(apellidomaternoInput);
    const correoValido = validateEmail(correoInput);

    if (!nombreValido || !apellidopaternoValido || !apellidomaternoValido || !correoValido) {
      event.preventDefault(); // Evita que el enlace se active si hay campos inválidos
    }
  }