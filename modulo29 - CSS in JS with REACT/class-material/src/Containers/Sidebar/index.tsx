import React from 'react'
import Titulo from '../../Components/Title'
import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrath'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

const Sidebar = () => {
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
        <BotaoTema>Trocar tema</BotaoTema>
      </SideBarContainer>
    </aside>
  )
}
export default Sidebar
