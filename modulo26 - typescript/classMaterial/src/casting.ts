namespace casting{
    let idade:any = 18;
    //o "as" muda o tipo da variavel momentaneamente, apenas para aquela acao.
    (idade as number).toFixed();
    (idade as string).length;
    
    //retorna um erro: idade nao eh array
    ///(idade as string[]).forEach(item => console.log(item));

    let nome: string = (35 as unknown) as string;
    
    // nome.
    // ParseInt("35")
    // parseFloat()
    // toString()
}