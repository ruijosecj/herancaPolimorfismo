function Conta(tipo, numero, saldo){
    this.tipo = tipo;
    this.numero = numero;
    this._saldo = saldo;

    this.getSaldo = function(){
        return this._saldo;
    }
    this.sacar = function(valor){
        if(valor < this._saldo){
            this._saldo-= valor;
        }
    }
    this.depositar = function(valor){
        if(valor >= 0 && (typeof valor === 'number') ){
            this._saldo += valor;
        }
    }
}

function ContaPoupanca(numero){
    Conta.call(this, 'Conta Poupanca', numero, 0);

    this.sacar = function(valor){
        const valorTaxa = valor * 1.1;
        this._saldo-=valorTaxa    
    }
   
    this.depositar = function(valor){
        const rendimentos = valor * 0.03;
        this._saldo+= (valor+rendimentos)     
    }
}
function ContaCorrente(numero){
    Conta.call(this, 'Conta Corrente', numero, 0);

    this.sacar = function(valor){
        const valorTaxa = valor * 1.2;
        this._saldo-=valorTaxa    
    }
   
    this.depositar = function(valor){
        this._saldo+= valor       
    }
}

console.log('Conta Poupança')
const contaP = new ContaPoupanca(1111);
contaP.depositar(100);
contaP.sacar(10)
console.log('Conta Poupança', contaP);

console.log('Conta Corrente')
const contaC = new ContaCorrente(2222);
contaC.depositar(100);
contaC.sacar(10)
console.log('Conta Corrente', contaC);

