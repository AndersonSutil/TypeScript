import {View} from './View';  //<<--- imports para utilizar o carregador de modulos
import {Negociacoes} from '../models/Negociacoes';
    
    export class NegociacoesView extends View <Negociacoes> { //<--classe filha passando o tipo <Negociacoes>
        
        template(model: Negociacoes): string {
    //--->String que é convertida para gerar o html, gerando as tabelas a cada objeto criado 
            return `
            <table class="table table-hover table-bordered">
                <thead>                                             
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
    
                <tbody>
    
                ${model.paraArray().map(negociacao => 
                    `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>                        
                    `).join('')}            
                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `
        }
    }
