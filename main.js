document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const contraseñaInput = document.getElementById('contraseña');
    const edadInput = document.getElementById('edad');
    const signUpBtn = document.getElementById('signUp');


    const nombreError = document.getElementById('nombreError');
    const correoError = document.getElementById('correoError');
    const contraseñaError = document.getElementById('contraseñaError');
    const edadError = document.getElementById('edadError');

    signUpBtn.addEventListener('click', function () {
        
        limpiarErrores();

        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contraseña = contraseñaInput.value.trim();
        const edad = edadInput.value.trim();

        let hayErrores = false;

       
        if (nombre === '') {
            nombreError.innerText = 'El nombre es obligatorio.';
            hayErrores = true;
        }

        
        if (correo === '') {
            correoError.innerText = 'El correo electrónico es obligatorio.';
            hayErrores = true;
        } else if (!validarCorreo(correo)) {
            correoError.innerText = 'Ingresa un correo electrónico válido.';
            hayErrores = true;
        }

        
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
            
            let mensaje = 'Registro exitoso';
            if (correo.endsWith('@duocuc.cl')) {
            mensaje += '\n¡Obtienes un 20% de descuento de por vida por tu correo @duocuc.cl!';
            }
            alert(mensaje); 
            window.location.href = 'index-postRegistro.html'; 
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
        edadError.innerText='';
        
    }
});
