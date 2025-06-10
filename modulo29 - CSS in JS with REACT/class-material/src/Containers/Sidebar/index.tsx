import React from 'react'
import Titulo from '../../Components/Title'
import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrath'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

type Props = {
  estaUsandoTemaLight: boolean
  setEstaUsandoTemaLight: (a: boolean) => void
}

const Sidebar = (props: Props) => {
  function trocaTema() {
    props.setEstaUsandoTemaLight(!props.estaUsandoTemaLight)
  }
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={20}>Guilherme Rocha</Titulo>
        <Paragrafo fontSize={16} tipo="secundario">
          @Guilherme-Augusto-Carvalho-da-Rocha
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor Fullstack
        </Descricao>
        <BotaoTema onClick={() => trocaTema()}>Trocar tema</BotaoTema>
      </SideBarContainer>
    </aside>
  )
}
export default Sidebar
