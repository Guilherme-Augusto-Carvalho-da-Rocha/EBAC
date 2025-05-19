function funcaoMuitoPesada(){
    let executions = 0;
    for (let i = 0; i < 10 ** 9; i++){
        executions++;
    }
    return executions;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try{
        let executions = 0;
    for (let i = 0; i < 10 ** 9; i++){
        executions++;
    }
    resolve(executions);
    } catch(e){
        reject("deu erro na iteracao dos numeros")
    }
})

const promiseWArguments = (login, senha) =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            try{
                resolve(console.log(`logado com o usuario: ${login}`))
            }catch(e){
                reject("o login ou a senha estao incorretos")
            }
        }, 3000)
    })
}

//a presenca do async torna tudo dentro dessa funcao assincrono, o await faz com que,
//antes de executar as outras coisas que vem depois no codigo, seja executado aquilo que tem o await
async function main(){
    console.log("inicio");
    
    //aqui ele ta fazendo sincronamente

    //console.log(funcaoMuitoPesada());
    

    //aqui ele faz "fora de ordem", onde a funcao mais rapida sai primeiro, nao impedindo o funcionamento das outras funcoes

    //funcaoMuitoPesadaPromise.then(resultado => console.log(resultado), erro => console.log(erro));

    promiseWArguments('gui.gutinks@gmail.com', 123456).then(resultado => console.log(resultado), erro => console.log(erro));

    try{
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    }catch (e){
        console.log(e)
    }

    console.log("fim");
}

main();