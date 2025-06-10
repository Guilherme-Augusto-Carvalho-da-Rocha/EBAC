import styled from 'styled-components'
import { Props } from './index'
import { Theme } from '../../themes/light'

export const P = styled.p<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as Theme).corPrincipal
      : (props.theme as Theme).corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  line-height: 22px;
`
