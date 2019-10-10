import { Negociacao } from './Negociacao';
export class Negociacoes { //<--- Camadas de escrita e leitura de dados  e validações  

    private _negociacoes: Negociacao [] = []; //<--- Retorna um array de negociacao feitas

    adiciona(negociacao:Negociacao):void{
        this._negociacoes.push(negociacao);

    }
    paraArray(): Negociacao[]{
        return [].concat(this._negociacoes);
    }

}