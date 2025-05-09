class ContaBancaria {
    constructor(titular,saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    verSaldo() {
        console.log(`Atualmente possui ${this.saldo} no nome de ${this.titular}`);
    }

    depositar() {
        this.saldo += sld;
        console.log(`Deposito feito, atualmente possui ${this.saldo}`)

    }

    sacar() {
        if(sld = 0){
            console.log(`Não é possivel realizar o saque`)
        } else {
        this.saldo -= sld;
        console.log(`Saque feito, atualmente possui ${this.saldo}`)
    }
}
let contabancaria = new ContaBancaria("Lucas",150);
contabancaria.verSaldo();
contabancaria.depositar(50);
contabancaria.sacar(25);