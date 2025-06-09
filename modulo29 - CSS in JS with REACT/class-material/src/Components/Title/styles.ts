import styled from 'styled-components'
import { Props } from './index'

export const Title = styled.h3<Props>`
  color: #282a35;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  margin-bottom: 16px;
`
