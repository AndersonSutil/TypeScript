import {NegociacaoController} from './controllers/NegociacaoController'; //<--- Importa a controller !obs:Sem sem a importação da controller não funca:obs!
const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));   
$('#botao-importa').click(controller.impotaDados.bind(controller));