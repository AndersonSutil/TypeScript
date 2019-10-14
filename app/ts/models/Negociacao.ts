
export class Negociacao {  //<--- classe que recebe os valores da view e as trata e valida 
    
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { //<-- Utilização do Reandoly
    }                                                                                      // para substituir o petodo Private

    get volume() {

        return this.quantidade * this.valor;
    }
}
