document.addEventListener('DOMContentLoaded', function () {
    var nombreInput = document.getElementById('nombre');
    var correoInput = document.getElementById('correo');
    var contraseñaInput = document.getElementById('contraseña');
    var edadInput = document.getElementById('edad');
    var signUpBtn = document.getElementById('signUp');


    var nombreError = document.getElementById('nombreError');
    var correoError = document.getElementById('correoError');
    var contraseñaError = document.getElementById('contraseñaError');
    var edadError = document.getElementById('edadError');

    signUpBtn.addEventListener('click', function () {
        // Limpiar errores anteriores
        limpiarErrores();

        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contraseña = contraseñaInput.value.trim();
        const edad = edadInput.value.trim();

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
        if(edad===''){
            edadError.innerText='la edad es obligatoria.';
            hayErrores = true;

        }else if (isNaN(edad) || parseInt(edad) < 18){
            edadError.innerText = 'Eres menor de edad.';

            hayErrores = true;
        }

        if (!hayErrores) {
            // Preparar el mensaje de registro
            let mensaje = 'Registro exitoso';
            if (correo.endsWith('@duocuc.cl')) {
            mensaje += '\n¡Obtienes un 20% de descuento de por vida por tu correo @duocuc.cl!';
            }
            alert(mensaje); // Mostrar solo un alert
            window.location.href = 'index.html'; // Redirigir después del alert
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
