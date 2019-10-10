class MensagemView extends View<string> {  //<--- classe filha // <string> type que e passado para a pai <T>

    update(model:string){
    this._elemento.html( this.template(model));
    }
    template(model:string):string{
        return `<p class="alert alert-info">${model}</p>`;
    }
}