document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    document.getElementById('nombreError').textContent = '';
    document.getElementById('apellidoError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('fechaNacimientoError').textContent = '';
    document.getElementById('paisError').textContent = '';
    document.getElementById('terminosError').textContent = '';

    let isValid = true;


    const nombre = document.getElementById('nombre').value;
    if (nombre === '') {
        isValid = false;
        document.getElementById('nombreError').textContent = 'El nombre es requerido';
    }


    const apellido = document.getElementById('apellido').value;
    if (apellido === '') {
        isValid = false;
        document.getElementById('apellidoError').textContent = 'El apellido es requerido';
    }


    const email = document.getElementById('email').value;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'El email es requerido';
    } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById('emailError').textContent = 'El email no es válido';
        }
    }

    const password = document.getElementById('password').value;
    if (password === '') {
        isValid = false;
        document.getElementById('passwordError').textContent = 'La contraseña es requerida';
    } else if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres';
    }


    const fechaNacimientoInput = document.getElementById('nacimiento');
    const fechaNacimientoError = document.getElementById('fechaNacimientoError');

    const fechaNacimiento = fechaNacimientoInput.value;

    if (!fechaNacimiento) {
        fechaNacimientoError.textContent = 'La fecha de nacimiento es requerida';
    } else {
        fechaNacimientoError.textContent = '';
    }

    const pais = document.getElementById('pais').value;
    if (pais === '') {
        isValid = false;
        document.getElementById('paisError').textContent = 'Escoge un Pais!';
    }

    const terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        isValid = false;
        document.getElementById('terminosError').textContent = 'Debe aceptar los términos y condiciones';
    }


    if (isValid) {
        alert('Formulario de registro enviado exitosamente!');
    }
});