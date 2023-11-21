/*1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.


class Contador {
    private valor: number;
  
    constructor() {
      this.valor = 0;
    }
  
    zerar(): void {
      this.valor = 0;
    }
  
    incrementar(): void {
      this.valor++;
    }
  
    retornarValor(): number {
      return this.valor;
    }
  }
  
  const meuContador = new Contador();
  
  console.log(meuContador.retornarValor())
  
  meuContador.incrementar();
  
  console.log(meuContador.retornarValor())
  
  meuContador.zerar();
  
  console.log(meuContador.retornarValor())
  */

/*2
2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor

class Bola {
    constructor(
        private cor: string = 'azul',
        private circunferencia: number = 30,
        private material: string = 'plastico') { }

    getMostrarBola(): string {
        return `sua bola e da cor ${this.cor}, sua circunferencia e ${this.circunferencia} e seu material e ${this.material}`
    }

    trocarCor(novaCor: string): void {
        this.cor = novaCor;
    }
}

const minhaBola = new Bola
console.log(minhaBola.getMostrarBola())

minhaBola.trocarCor("amarelo");
console.log(minhaBola.getMostrarBola())
*/

/*3 Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.*/

class ContaCorrente {
    constructor(private numero: number = 12345, private nomeCliente: string = 'joao', private saldo: number = 0){}

    exibirConta(): string{
        return `minha conta é : ${this.numero} meu nome é ${this.nomeCliente} e meu saldo inicial é ${this.saldo}`
    }

    trocarNome(nome: string): void{
        this.nomeCliente = nome
    }

}

const minhaConta =  new ContaCorrente()




