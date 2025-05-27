import './perfil.css'

//export default () => {} eh uma possibilidade de componenete sem nome.
//exporte default function() {} eh outra possibilidade de componente sem nome.

const Perfil = ({endereco, nome}) => {

    return(
        <div>
            <img className="perfil-avatar" src={endereco}/>
            <h3 className="perfil-titulo">{nome}</h3>
        </div>
    )
}

export default Perfil;