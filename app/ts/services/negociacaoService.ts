import { NegociacaoParcial, Negociacao } from '../models/index';
export class negociacaoService {


  obterNegociacoes(handles: HandlesFunction): Promise<Negociacao[]> {  //<--- Chamada encadeada then 

    return fetch('http://localhost:8080/dados')                //<--- Método que Utiliza a Api 
      .then(res => handles(res))
      .then(res => res.json())
      .then((dados: NegociacaoParcial[]) => //<--- NegiciacaoParcial de uma interface para validadar dados
        dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)) //<--- Manda dados para uma nova negociação 
      
      ).catch(err => {
        console.log(err);
        throw new Error('!!! Não Foi Possivel Importar as Negociações !!!');  //<--- Tratando o Erro para exibição para Usuario
      });

  }                      //<--- .catch(err => console.log(err)); 'não funciona' Ver isso depois *Resolvido* Utilizando o throw
}
export interface HandlesFunction {
  (res: Response): Response
}
