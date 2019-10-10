class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        console.log(negociacao.data); //<--- testando as saida no console do Browser
        this._mensagemView.update('Deu certo carai');
        //this._negociacoes.paraArray().forEach(negociacao =>{
        //  console.log(negociacao.data);                     //< ----  array com objetos para teste
        //   console.log(negociacao.quantidade);
        //  console.log(negociacao.valor);
        //    console.log(negociacao.volume);
        //  })
    }
}
