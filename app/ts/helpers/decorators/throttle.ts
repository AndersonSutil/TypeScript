
export function throttle(milissegundos = 500) { //<--- Método que faz com que o usuario espere meio segundo para obter sua requisição 
                                                
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]) {
            if(event) event.preventDefault();  //<--- Vê se é um evento e passa ele d emodo implicido
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }

        return descriptor;
    }
}