let meuMap = new Map();
meuMap.set("nome", "guilherme");
meuMap.set("stack", "html, CSS, JS")

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

for (let chaves of meuMap.keys()){
    console.log(chaves);
}

for (let valor of meuMap.values()){
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack");

console.log(meuMap);

const cpfs = new Set();

cpfs.add('617.545.274-77');
cpfs.add('364.719.394-18');
cpfs.add('971.439.804-55');

console.log(cpfs)

console.log(cpfs.values())
console.log(cpfs.keys())

cpfs.forEach((valor) =>{
    console.log(valor);
})

const array = ['Guilherme Augusto', 'Larissa Aires', 'Vanessa Karol', 'Maria de Lurdes', 'Elvis Rocha', 'Guilherme Augusto'];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];


console.log(arrayComoSet)

console.log(arraySemItensDuplicados);