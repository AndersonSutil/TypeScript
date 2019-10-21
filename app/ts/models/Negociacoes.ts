import { Negociacao } from './Negociacao';
import { MeuObjeto } from './index'
export class Negociacoes implements MeuObjeto<Negociacoes> { //<--- Camadas de escrita e leitura de dados  e validações  

    private _negociacoes: Negociacao[] = []; //<--- Retorna um array de negociacao feitas

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);

    }
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);  //<--- Com o Uso do StrictNullCheck Tem declarar o tipo do Array[]
    }
    paraTexto():void {
        console.log('Imprime');
        console.log(JSON.stringify(this._negociacoes));
    }
    ehIgual(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}