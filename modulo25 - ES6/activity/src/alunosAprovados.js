const alunos = [
    { nome: "Ana", nota: 2.1 },
    { nome: "Bruno", nota: 7.2 },
    { nome: "Carla", nota: 5.3 },
    { nome: "Daniel", nota: 6.8 },
    { nome: "Eduarda", nota: 10.0 },
    { nome: "Felipe", nota: 5.9 },
    { nome: "Gabriel", nota: 7.6 },
    { nome: "Helena", nota: 8.9 },
    { nome: "Igor", nota: 4.3 },
    { nome: "Juliana", nota: 9.5 },
    { nome: "Kleber", nota: 6.2 },
    { nome: "Larissa", nota: 7.8 }
];

function GetAlunosAprovados(){
    let alunosAprovados = [];
    alunos.forEach( itemAtual => {
        if(itemAtual.nota >= 6){
            alunosAprovados.push(itemAtual);
        }
    })
    console.log(alunosAprovados);
}

GetAlunosAprovados();