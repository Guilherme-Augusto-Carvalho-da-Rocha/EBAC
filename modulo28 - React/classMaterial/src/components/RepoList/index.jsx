import { useState ,useEffect } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true);
    useEffect( () => {
        fetch('https://api.github.com/users/Guilherme-Augusto-Carvalho-da-Rocha/repos')
        .then( resolve => resolve.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            },3000)
        })
    }, [])

    return(
        <>
            {estaCarregando &&(
                <h3>Carregando...</h3>
            )}
            <ul>
                {repos.map(({id, name, language, html_url}) => (
                    <li key={id}>
                        <b>Nome:{name}</b><br />
                        <b>linguagem:{language}</b> <br />
                        <a target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ReposList;