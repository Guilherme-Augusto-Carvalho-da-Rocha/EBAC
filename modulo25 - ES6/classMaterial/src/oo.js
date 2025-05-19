// function Pokemon (nome, tipo1, tipo2){
//     this.nome = nome;
//     this.tipo1 = tipo1;
//     this.tipo2 = tipo2;
// }

// const garchomp = new Pokemon("Garchomp", "Dragao", "Terrestre")

class Pokemon {
    #hp = 100;

    constructor(nome, tipo1, tipo2){
        this.nome = nome;
        this.tipo1 = tipo1;
        this.tipo2 = tipo2;
        this.tipos = [];
        
        this.tipos.push(tipo1, tipo2);
    }

    atacar(nomeDoAtaque, alvo){
        console.log(`${this.nome} usou ${nomeDoAtaque}`)
        alvo.setHp(alvo.getHp()-10);
        console.log(`o ${alvo.nome} recebeu 10 de dano`)
    }

    getHp(){
        return this.#hp;
    }

    setHp(hp){
        this.#hp = hp;
    }
}

class Garchomp extends Pokemon{
    constructor(nome){
        super(nome, 'Dragao', 'Terrestre')
    }

    atacar(alvo){
        console.log(`${this.nome} usou earthquake`)
        alvo.setHp(alvo.getHp()-20);
        console.log(`o ${alvo.nome} recebeu 20 de dano`)
    }
}

const playersGarchomp = new Garchomp('Garchomp do jogador');
const foeGarchomp = new Pokemon('Garchomp da cynthia', 'Dragao', 'Terrestre')
// playersGarchomp.nome = 'Garchomp';
// playersGarchomp.tipo1 = 'Dragao';
// playersGarchomp.tipo2 = 'Terrestre';
playersGarchomp.atacar(foeGarchomp)
foeGarchomp.atacar(`earthquake`, playersGarchomp)

console.log(playersGarchomp.getHp());
console.log(foeGarchomp.getHp());

console.log(playersGarchomp instanceof Garchomp);
console.log(playersGarchomp instanceof Pokemon);