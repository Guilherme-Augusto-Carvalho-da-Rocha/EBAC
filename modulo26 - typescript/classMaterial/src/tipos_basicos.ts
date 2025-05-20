//let e const para variaveis
let estaChovendo:boolean = false;

//NAO PODE: estaChovendo = 'true';

let idade:number = 18;

let altura:number = 1.73;

const nacionalidade:string = 'Brasileiro';

const colegas:string[] = ['Leonam', 'Lucas'];
const tecnologias:Array<string> = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'C++'];
const notas:ReadonlyArray<number> = [7, 9 , 8, 10];

//pode
tecnologias.push();
//nao pode adicionar nada porque eh read only:
//notas.push();

const lista:[nome: string, estudante: boolean, idade: number] = ['Guilherme', true, 18]

let idadeDaAna:number|string = 25;
idadeDaAna = '25 anos'
//NAO PODE
//idadeDaAna = false

//pra ficar baguncado igual no javascript
let dadosDaAPI:any = 1;
dadosDaAPI = 'pode tudo';
dadosDaAPI = true;
dadosDaAPI = [];
dadosDaAPI = [1,2,3];