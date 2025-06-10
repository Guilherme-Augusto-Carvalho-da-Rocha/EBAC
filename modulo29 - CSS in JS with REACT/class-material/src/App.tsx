import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import temaLight from './themes/light'
import temaDark from './themes/dark'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Projetos from './Containers/Projetos'

function App() {
  const [estaUsandoTemaLight, setEstaUsandoTemaLight] = useState(true)

  return (
    <ThemeProvider theme={estaUsandoTemaLight ? temaLight : temaDark}>
      <EstiloGlobal />
      <Container>
        <Sidebar
          estaUsandoTemaLight={estaUsandoTemaLight}
          setEstaUsandoTemaLight={setEstaUsandoTemaLight}
        />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
