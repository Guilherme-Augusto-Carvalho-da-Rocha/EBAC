import React from 'react'
import { P as PStyle } from './styles'

export type Props = {
  children: string
  tipo: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = (props: Props) => {
  return (
    <>
      <PStyle tipo={props.tipo}>{props.children}</PStyle>
    </>
  )
}

export default Paragrafo
