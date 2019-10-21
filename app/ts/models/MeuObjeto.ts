import {Igualavel,Imprimivel} from './index';   //<--- Interface Implementando outras interface
export interface MeuObjeto<T> extends Imprimivel,Igualavel<T> {
}