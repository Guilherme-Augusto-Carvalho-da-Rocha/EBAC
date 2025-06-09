import React from 'react'
import Titulo from '../Title'
import Paragrafo from '../Paragrath'
import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>TItulo do projeto</Titulo>
      <Paragrafo tipo="secundario">descricacao do projeto</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
