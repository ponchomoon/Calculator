class Display {
    constructor(displayValorAnterior, displayValorActual) {
            this.displayValorActual = displayValorActual;
            this.displayValorAnterior = displayValorAnterior;
            this.calculator = new Calculator();
            this.tipoOperacion = undefined;
            this.valorActual = '';
            this.valorAnterior = '';
            this.signos = {
                sum: `+`,
                div: `%`,
                multi: `x`,
                sub: `-`,

            }
        }
        //print just one point-decimal 
    addNumber(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    //arrow button
    erase() {
            this.valorActual = this.valorActual.toString().slice(0, -1);
            this.imprimirValores();
        }
        //C button
    eraseall() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.imprimirValores();
    }

    //operations sum, subs, div, multi
    operation(type) {
            this.tipoOperacion !== 'equal' && this.calcu();
            this.tipoOperacion = type;
            this.valorAnterior = this.valorActual || this.valorAnterior;
            this.valorActual = '';
            this.imprimirValores();

        }
        //print numbers
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] ||''}`;

    }

    //String to number
    calcu() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculator[this.tipoOperacion](valorAnterior, valorActual);
    }

}