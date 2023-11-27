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

/*2. Crie uma classe que modele uma bola:
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
negativo.

class ContaCorrente {
    constructor(private numero: number, private nomeCliente: string, private saldo: number){}

    exibirConta(): string{
        return `minha conta é : ${this.numero} meu nome é ${this.nomeCliente} e meu saldo inicial é ${this.saldo}`
    }

    trocarNome(nome: string): void{
        this.nomeCliente = nome
    }

    depositoInicial(deposito: number): void{
        this.saldo = this.saldo += deposito
    }

    saqueInicial(saque: number): void{
        this.saldo = this.saldo -= saque
    }
}

const minhaConta =  new ContaCorrente(1234, 'eduardo', 0)
console.log(minhaConta.exibirConta())

minhaConta.trocarNome('joao')
console.log(minhaConta.exibirConta());

minhaConta.depositoInicial(3000)
console.log(minhaConta.exibirConta());

minhaConta.saqueInicial(1000)
console.log(minhaConta.exibirConta());

*/

//nao fiz ainda
/**4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico. */

/*5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro
iii. quantidadeCombustivel

b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.

class Bomba {
    constructor(
        private tipoCombustivel: string,
        private valorLitro: number,
        private quantidadeCombustivel: number
        ){}

        abastecerPorValor(valorPagar: number): string {
            const litrosAbastecidos = valorPagar / this.valorLitro;
        
            if (litrosAbastecidos > this.quantidadeCombustivel) {
              return 'Não há combustível suficiente na bomba.';
            }
        
            this.quantidadeCombustivel -= litrosAbastecidos;
        
            return `Abastecidos ${litrosAbastecidos.toFixed(2)} litros. Total a pagar: R$ ${valorPagar.toFixed(2)}`;
          }
        
          abastecerPorLitro(litros: number): string {
            const valorPagar = litros * this.valorLitro;
        
            if (litros > this.quantidadeCombustivel) {
              return 'Não há combustível suficiente na bomba.';
            }
        
            this.quantidadeCombustivel -= litros;
        
            return `Abastecidos ${litros.toFixed(2)} litros. Total a pagar: R$ ${valorPagar.toFixed(2)}`;
          }
        
          alterarValor(novoValor: number): void {
            this.valorLitro = novoValor;
          }
        
          alterarCombustivel(novoCombustivel: string): void {
            this.tipoCombustivel = novoCombustivel;
          }
        
          alterarQuantidadeCombustivel(novaQuantidade: number): void {
            this.quantidadeCombustivel = novaQuantidade;
          }
        }
        
        // Exemplo de uso:
        const bomba = new Bomba('Gasolina', 5.0, 100);
        
        console.log(bomba.abastecerPorValor(50)); // Exemplo de abastecimento por valor
        console.log(bomba.abastecerPorLitro(10)); // Exemplo de abastecimento por litro
        
        bomba.alterarValor(4.5); // Alterando o valor do litro
        bomba.alterarCombustivel('Etanol'); // Alterando o tipo de combustível
        bomba.alterarQuantidadeCombustivel(150); // Alterando a quantidade de combustível
        
        console.log(bomba.abastecerPorValor(60))
*/
