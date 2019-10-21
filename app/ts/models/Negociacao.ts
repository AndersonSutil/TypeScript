import { Imprimivel } from './index'
import {Igualavel} from './Igualavel'

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {  //<--- classe que recebe os valores da view e as trata e valida 

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { //<-- Utilização do Reandoly
        
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
    ehIgual(negociacao:Negociacao):boolean{
        return this.data.getDay() == negociacao.data.getDay()
        && this.data.getMonth() == negociacao.data.getMonth()
        && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}
