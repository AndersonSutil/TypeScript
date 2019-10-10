abstract class View<T> { //<---classe pai //<T> tipo esperado  
    
    protected _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
     }
    update(model:T){
        this._elemento.html(  this.template(model));
    }
    abstract template(model: T):string;
}