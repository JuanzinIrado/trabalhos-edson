class Calculadora {
    constructor(Valor1,Valor2,Resultado) {
        this.Valor1 = Valor1;
        this.Valor2 = Valor2;
        this.Resultado = 0;
    }
    verResultado() {
        console.log(`O resultado atualmente é ${this.Resultado}`);
    }
    somaria() {
        this.Resultado = this.Valor1 + this.Valor2;
        console.log(`Soma feita, o resultado atualmente é ${this.Resultado}`);
    }
    subtração() {
        this.Resultado = this.Valor1 + this.Valor2;
        console.log(`Subtração feita, o resultado atualmente é ${this.Resultado}`);
    }
    multiplicação() {
        this.Resultado = this.Valor1 * this.Valor2;
        console.log(`Multiplicação feita, o resultado atualmente é ${this.Resultado}`);
    }
    divisão() {
        if (this.Valor2 !== 0) {
            this.Resultado = this.Valor1 / this.Valor2;
            console.log(`Divisão feita, o resultado atualmente é ${this.Resultado}`);
        } else {
            console.log(`Erro: divisão por zero não é permitida`)
        }
    }
}
let resultado = new Calculadora(5,5);
resultado.verResultado();