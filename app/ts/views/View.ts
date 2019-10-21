   import {logarTempoDeExecucao} from '../helpers/decorators/logarTempoDeExecucao';
   export abstract class View<T> { //<---classe pai //<T> tipo esperado  
    
        protected _elemento: JQuery;
        private _escapar: boolean;
    
        constructor(seletor: string, escapar:boolean = false) {
            this._elemento = $(seletor);
            this._escapar = escapar;
         }
         @logarTempoDeExecucao()
        update(model:T){
            let template = this.template(model);
            if  (this._escapar)
                template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
            this._elemento.html( template);
        }
        
        abstract template(model: T):string;
    }
