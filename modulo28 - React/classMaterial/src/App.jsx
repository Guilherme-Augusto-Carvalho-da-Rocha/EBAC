import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";
import { useState } from "react";

function App() {
const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return(
    <>
      <Perfil nome="Guilherme Augusto" endereco="https://github.com/Guilherme-Augusto-Carvalho-da-Rocha.png"/>
      <ReposList/>
      {/* {formularioEstaVisivel &&(
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
    
  )
}

export default App
