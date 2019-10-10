class MensagemView extends View<string> {

    update(model:string){
    this._elemento.html( this.template(model));
    }
    template(model:string):string{
        return `<p class="alert alert-info">${model}</p>`;
    }
}