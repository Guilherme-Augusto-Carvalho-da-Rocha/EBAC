import {Store} from './store.js';

export class Bookstore extends Store{
    #_bookList = [];
    #_bestSeller = '';

    constructor(name, location, cnpj, bookList, bestSeller){
        super(name, location, cnpj);
        this.setBookList(bookList);
        this.setBestSeller(bestSeller);
    }

    getBookList(){
        return this.#_bookList;
    }

    setBookList(bookList){
        if(bookList instanceof Array){
            this.#_bookList = bookList;
        }else{
            throw new Error('The bookList is not an Array');
        }
    }

    getBestSeller(){
        return this.#_bestSeller;
    }

    setBestSeller(bestSeller){
        if(typeof bestSeller === 'string' && this.getBookList().includes(bestSeller)){
            this.#_bestSeller = bestSeller;
        } else {
            throw new Error('The best seller must be a string');
        }
    }
}