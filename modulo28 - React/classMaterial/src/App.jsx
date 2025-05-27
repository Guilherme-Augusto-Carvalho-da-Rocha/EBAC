import Perfil from "./components/Perfil"

function App() {
  const nome = 'Guilherme'
  
  function getNome(){
    return nome;
  }

  const Pessoa = {
    nome: 'Will'
  }

  let isItMorning = false;

  return(
    <>
      <Perfil/>
    </>
    
  )
}

export default App
