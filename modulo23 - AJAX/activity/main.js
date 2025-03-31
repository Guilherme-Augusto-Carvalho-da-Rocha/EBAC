$(document).ready(function() {
    const endpoint = 'https://api.github.com/users/Guilherme-Augusto-Carvalho-da-Rocha'

    fetch(endpoint)
    .then(response => {
        if(!response.ok){
            throw new Error('Erro na comunicação com a api');
        }
        return response.json();
    }).then( data => {
        $('#profile-pic').attr('src', data.avatar_url);
        $('#profile-name').html(data.name);
        $('#profile-username').html(`@${data.login}`);
        $('#repos').html($('#repos').html().replace('X', data.public_repos));
        $('#followers').html($('#followers').html().replace('X', data.followers));
        $('#following').html($('#following').html().replace('X', data.following));
        $('#github-link').attr('href', data.html_url);
    })
    .catch(error =>{
        //alert('ocorreu um erro ao buildar o site, tente novamente mais tarde.')
        console.error('Ocorreu um erro:', error);
    })
})