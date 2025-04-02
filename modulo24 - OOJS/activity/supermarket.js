import {Store} from './store.js';

export class Supermarket extends Store{
    #_productSections = [];
    #_mostProfitableSection = '';

    constructor(name, location, cnpj, productSections, mostProfitableSection){
        super(name, location, cnpj);
        this.setProductSections(productSections);
        this.setMostProfitableSection(mostProfitableSection);
    }

    getProductSections(){
        return this.#_productSections;
    }

    setProductSections(productSections){
        if(productSections instanceof Array){
            this.#_productSections = productSections;
        }else{
            throw new Error('The productSections is not an Array');
        }
    }

    getMostProfitableSection(){
        return this.#_mostProfitableSection;
    }

    setMostProfitableSection(mostProfitableSection){
        if(typeof mostProfitableSection === 'string' && this.getProductSections().includes(mostProfitableSection)){
            this.#_mostProfitableSection = mostProfitableSection;
        } else {
            throw new Error('The best seller must be a string');
        }
    }
}