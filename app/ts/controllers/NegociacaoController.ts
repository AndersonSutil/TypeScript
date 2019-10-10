import { MensagemView } from '../views/MensagemView';   //<--- Imports sintaxe de módulos do ES2015 considera 
import {NegociacoesView } from '../views/NegociacoesView';//             através das instruções import e export
import {Negociacao} from '../models/Negociacao';
import {Negociacoes} from '../models/Negociacoes';


export class NegociacaoController { //<--- Camada de Negócio 

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
     
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes)
    
    console.log(negociacao.data);  //<--- testando as saida no console do Browser
    
    this._mensagemView.update('Deu certo carai');
    //this._negociacoes.paraArray().forEach(negociacao =>{
                  //  console.log(negociacao.data);                     //< ----  array com objetos para teste
                  //   console.log(negociacao.quantidade);
                  //  console.log(negociacao.valor);
                  //    console.log(negociacao.volume);
             //  })
    }
}