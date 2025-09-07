document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const contraseñaInput = document.getElementById('contraseña');
    const signUpBtn = document.getElementById('signUp');

    const nombreError = document.getElementById('nombreError');
    const correoError = document.getElementById('correoError');
    const contraseñaError = document.getElementById('contraseñaError');

    signUpBtn.addEventListener('click', function () {
        // Limpiar errores anteriores
        limpiarErrores();

        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contraseña = contraseñaInput.value.trim();

        let hayErrores = false;

        // Validación del nombre
        if (nombre === '') {
            nombreError.innerText = 'El nombre es obligatorio.';
            hayErrores = true;
        }

        // Validación del correo
        if (correo === '') {
            correoError.innerText = 'El correo electrónico es obligatorio.';
            hayErrores = true;
        } else if (!validarCorreo(correo)) {
            correoError.innerText = 'Ingresa un correo electrónico válido.';
            hayErrores = true;
        }

        // Validación de la contraseña
        if (contraseña === '') {
            contraseñaError.innerText = 'La contraseña es obligatoria.';
            hayErrores = true;
        } else if (!validarContraseña(contraseña)) {
            contraseñaError.innerText = 'Debe tener al menos 6 caracteres, una letra y un número.';
            hayErrores = true;
        }

        if (!hayErrores) {
            // Si no hay errores, puedes proceder con el registro
            alert('Registro exitoso');
        }
    });

    function validarCorreo(correo) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }

    function validarContraseña(contraseña) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return regex.test(contraseña);
    }

    function limpiarErrores() {
        nombreError.innerText = '';
        correoError.innerText = '';
        contraseñaError.innerText = '';
    }
});
