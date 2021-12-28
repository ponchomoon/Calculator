const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

botonesOperadores.forEach(button => {
    button.addEventListener('click', () => display.operation(button.value));
});