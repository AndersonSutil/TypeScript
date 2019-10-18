import { Imprimivel } from './index'

export class Negociacao extends Imprimivel {  //<--- classe que recebe os valores da view e as trata e valida 

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { //<-- Utilização do Reandoly
        super();
    }                                                                                      // para substituir o petodo Private

    get volume() {

        return this.quantidade * this.valor;
    }
    paraTexto(): void {
        console.log('Impressão');
        console.log(
            `Data: ${this.data}
                Quantidade: ${this.quantidade}
                Valor: ${this.valor}
                Volume: ${this.volume} `
        );
    }
}
