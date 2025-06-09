import React from 'react'
import Titulo from '../../Components/Title'
import Projeto from '../../Components/Projeto'
import { Lista } from './styles'

const Projetos = () => {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
      </Lista>
    </section>
  )
}

export default Projetos
