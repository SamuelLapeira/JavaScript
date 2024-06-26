/*****************************************************************
 *  Autor: Samuel Lapeira Pérez
 *  Curso: 1ºDaw
 *  Tarea: Portfolio Js
 *
 *****************************************************************/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularBoton').addEventListener('click', calcularMCD);

    function calcularMCD() {
        const numero1 = document.getElementById("numero1").value;
        const numero2 = document.getElementById("numero2").value;
        const resultado = document.getElementById("resultado");
        const errorNumero1 = document.getElementById("errorNumero1");
        const errorNumero2 = document.getElementById("errorNumero2");
        const num1 = parseInt(numero1);
        const num2 = parseInt(numero2);
        const enteroPositivo = /^[1-9]\d*$/;
        
        let a = num1;
        let b = num2;

        errorNumero1.textContent = "";
        errorNumero2.textContent = "";
        resultado.textContent = "";
        
        if (!numero1 || !numero2) {
            if (!numero1) errorNumero1.textContent = "Por favor, introduce un número.";
            if (!numero2) errorNumero2.textContent = "Por favor, introduce un número.";
            return;
        }
        
        if (!enteroPositivo.test(numero1) || !enteroPositivo.test(numero2)) {
            if (!enteroPositivo.test(numero1)) errorNumero1.textContent = "Por favor, introduce un número entero positivo.";
            if (!enteroPositivo.test(numero2)) errorNumero2.textContent = "Por favor, introduce un número entero positivo.";
            return;
        }
        
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        
        document.getElementById("resultado").innerHTML = "El MCD es: "+a  ;    
    }
});
