import {Store} from './store.js';
import {Bookstore} from './bookstore.js';
import {Supermarket} from './supermarket.js';

const loja1 = new Store('defaultStore', 'defaultLocation', '11.111.111/0001-11');
const loja2 = new Bookstore('Aviaras', 'Shopping de algum lugar', '22.222.222/0001-22', ['Harry Potter', 'Percy Jackson'], 'Harry Potter')
const loja3 = new Supermarket('Mansa Maré', 'Rua atrás da sua casa', '33.333.333/0001-33', ['Frutas e Legumes', 'Carnes', 'Laticinios'], 'Carnes')

// console.log(loja1.getName());
// console.log(loja2.getName());
// console.log(loja3.getName());