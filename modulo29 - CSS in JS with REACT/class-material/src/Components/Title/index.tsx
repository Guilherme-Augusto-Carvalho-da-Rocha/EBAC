import React from 'react'
import { Title as TitleStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => {
  return (
    <>
      <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
    </>
  )
}

export default Titulo
