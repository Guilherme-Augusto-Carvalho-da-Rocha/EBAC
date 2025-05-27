import './perfil.css'

//export default () => {} eh uma possibilidade de componenete sem nome.
//exporte default function() {} eh outra possibilidade de componente sem nome.

const Perfil = () => {
    const usuario ={
        nome: 'Guilherme Augusto',
        avatar: 'https://github.com/Guilherme-Augusto-Carvalho-da-Rocha.png'
    }

    return(
        <div>
            <img className="perfil-avatar" src={usuario.avatar}/>
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;