import { NegociacoesView, MensagemView } from '../views/index';  //<--- Imports sintaxe de módulos do ES2015 considera 
import { Negociacao, Negociacoes } from '../models/index';  //             através das instruções import e export
import { domInject } from '../helpers/decorators/index';                            


export class NegociacaoController { //<--- Camada de Negócio 

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;               //<---Utilizando os Dados do domInject 
    
    @domInject('#valor')
    private _inputValor: JQuery;
    
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    
    constructor() {
        this._negociacoesView.update(this._negociacoes);       //<---Retiras os dados do contrutor, na utilização do domInject
    }

    adiciona(event: Event) {

        event.preventDefault();
        
        let data = new Date(this._inputData.val().replace(/-/g, ','))
        if(!this._ehDiaUtil(data)) {

            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return 
        }

        const negociacao = new Negociacao(
            data,
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
    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
    impotaDados(){
        function isOk(res:Response){      //<--- Função que trata os erros de requisição
            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText);  //<--- Mensagem de erro tratada 
            }
        }
            fetch('http://localhost:8080/dados')                //<---Retorna os Dados se tudo Ok
            .then(res => isOk (res))
            .then(res => res.json())
            .then((dados:any [] ) => {
                dados.map(dado => new Negociacao(new Date(), dado.vezes , dado.montante)) //<--- Manda dados para uma nova negociação 
                    .forEach(Negociacao => this._negociacoes.adiciona(Negociacao))  //<--- Para cada negociação adiciona nova negociação na View update
                    this._negociacoesView.update(this._negociacoes); 
            })
            .catch(err => console.log(err));
        }
    }


enum DiaDaSemana {

    Domingo, 
    Segunda, 
    Terca, 
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado
}