class View <T> {
   protected _elemento: Element;

    constructor(seletor: string) {

        this._elemento = document.querySelector(seletor);
    }
    update(model:T){
        this._elemento.innerHTML =  this.template(model);
    }
    template(model:T):string{
        return `<p class="alert alert-info">${model}</p>`;
    }
}