import styled from 'styled-components'
import { Props } from './index'
import { Theme } from '../../themes/light'

export const Title = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  margin-bottom: 16px;
`
