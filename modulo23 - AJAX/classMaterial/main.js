//com JS normal e fetch:

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnBuscarCep').addEventListener('click', function(){
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        //requisição via XML

        // xhttp.open('GET', endpoint);
        // xhttp.send();

        //requisição via fetch com um pouco de JQuery
        $('#cep').mask('00000-000');
        fetch(endpoint)
        .then (response =>{
            if (!response.ok){
                throw new Error('Erro na requisição');
            }
            return response.json()
        })
        .then(data => {
            const logradouro = data.logradouro;  
            const endereco = document.getElementById('endereco');
            endereco.value = logradouro;
            $('#btnBuscarCep').find('i').addClass('d-none');
            $('#btnBuscarCep').find('span').removeClass('d-none');
        })
        .catch(error => {
            alert('ocorreu um erro ao tentar buscar seu CEP, tente novamente mais tarde.')
            console.error('Ocorreu um erro:', error);
        })
        .finally(function(){
            $('#btnBuscarCep').find('i').removeClass('d-none');
            $('#btnBuscarCep').find('span').addClass('d-none');
        })
    })

    document.getElementById('asked-form').addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        console.log(name)
        if(name.length == 0){
            throw new Error('Erro: o campo nome não foi preenchido corretamente')
        }
    })
})

//com JQuery e AJAX:

// $(document).ready(function(){
//     $('#cep').mask('00000-000');

//     $('#btnBuscarCep').on('click', function(){
//         const cep = $('#cep').val();
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//         const button = $(this);
//         $(button).find('i').addClass('d-none');
//         $(button).find('span').removeClass('d-none');
        
//         $.ajax(endpoint).done(function(resposta){
//             const logradouro = resposta.logradouro;
//             const bairro = resposta.bairro;
//             const cidade = resposta.localidade;
//             const estado = resposta.uf;
//             const endereco = `${logradouro}, ${bairro}, ${cidade} - ${estado}`;
//             const inputEndereco = $('#endereco');
//             inputEndereco.val(endereco);

//             $(button).find('i').removeClass('d-none');
//             $(button).find('span').addClass('d-none');
            
//         });
//     })
// })