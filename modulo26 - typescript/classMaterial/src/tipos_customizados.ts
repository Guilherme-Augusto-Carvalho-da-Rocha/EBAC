//tipos customizados sao bons para criar padronizacoes para coisas especificas, quase como um objeto, mas sem metodos.
type aluno = {
    nome:string;
    cursos?:string[];
    idade:number;
}

const alunos:aluno[] = [
    {nome: 'Carlos', cursos: ['front-end', 'UX-UI'], idade: 27},
    {nome: 'Ana', cursos: ['front-end', 'python'], idade: 23}
];

//typescript identifica que precisa ser um objeto com os mesmos tipos de atributos dos outros objetos
//alunos.push('Julia')
alunos.push({nome: "Julia", cursos: ["Arquitetura"], idade: 29});

const novoAluno:aluno = {nome: 'Gabriel', idade: 18};

function exibeAluno(aluno:aluno){
    console.log(aluno.nome);
}

exibeAluno(novoAluno);