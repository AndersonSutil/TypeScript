import { NegociacoesView, MensagemView } from '../views/index';  //<--- Imports sintaxe de módulos do ES2015 considera 
import { Negociacao, Negociacoes } from '../models/index';  //             através das instruções import e export
import { domInject, throttle } from '../helpers/decorators/index';
import { negociacaoService } from '../services/index'
import { imprime } from '../helpers/index'

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
    private _service = new negociacaoService();      //<--- Instanciando a Service

    constructor() {
        this._negociacoesView.update(this._negociacoes);       //<---Retiras os dados do contrutor, na utilização do domInject
    }
    @throttle() //<--- Metodo Decorator que impede do user clicar sem parar e sobrecarregar o back
    adiciona(event: Event) {



        let data = new Date(this._inputData.val().replace(/-/g, ','))
        if (!this._ehDiaUtil(data)) {

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

        imprime(negociacao, this._negociacoes); //<--- testando as saida no console do Browser Com a função Imprime da Utils + paraTexto da classe Negociacao
        //<--- Só tipos imprimiveis são Aceitas Atraves de Polimorfismo
        this._mensagemView.update('Deu certo carai');
    }
    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
    @throttle()
    async impotaDados() {    //<--- Utilização do método async/await ES2017 Possibilitando Fazer o codigo executar Assíncrono e utilizaçã do Try Catch
        //<--- Função que trata os erros de requisição
        try {
            const negociacoesParaImportar = await this._service                          //<--- Chamando a api da Service, e substituundo o método antigo
                .obterNegociacoes(res => {         //<--- Função de tratamento passada aqui com uma ArrowFunction  =>
                    if (res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);  //<--- Mensagem de erro tratada 
                    }
                });
            //<--- Utilizando o Metodo  ehIgual da interface Igualavel 
            const negociacaoJaImportadas = this._negociacoes.paraArray();   // Testa se não possui Negociação Iguais 

            negociacoesParaImportar.filter(negociacao => !negociacaoJaImportadas
                .some(jaImportadas => negociacao
                    .ehIgual(jaImportadas)))
                .forEach(negociacao =>
                    this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);


        } catch (err) {
            this._mensagemView.update(err.message); //<--- Utilizando O erro tratado para Informar o uzuario pelo metodo update
        }
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