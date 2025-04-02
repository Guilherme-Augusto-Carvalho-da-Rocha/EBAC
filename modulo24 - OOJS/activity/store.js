//modelo CNPJ: XX.XXX.XXX/0001-XX

export class Store {
    #_name = '';
    #_location = '';
    #_cnpj = '';
    
    constructor(name, location, cnpj){
        this.setName(name);
        this.setLocation(location);
        this.setCnpj(cnpj);
    }

    getName(){
        return this.#_name;
    }

    setName(name){
        if(typeof name === 'string'){
            this.#_name = name;
        } else {
            throw new Error('The name must be a string');
        }
    }

    getLocation(){
        return this.#_location;
    }

    setLocation(location){
        if(typeof location === 'string'){
            this.#_location = location;
        }else {
            throw new Error('The location must be a string');
        }
    }

    getCnpj(){
        return this.#_cnpj;
    }

    setCnpj(cnpj){
        if(typeof cnpj === 'string'){
            this.#_cnpj = cnpj;
        }else {
            throw new Error('The cnpj must be a string');
        }
    }
}