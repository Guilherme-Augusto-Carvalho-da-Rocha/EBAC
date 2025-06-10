import styled from 'styled-components'
import { P } from '../../Components/Paragrath/styles'
import { Theme } from '../../themes/light'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`
export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border: none;
  border-radius: 12px;
  color: ${(props) => (props.theme as Theme).corDeFundo};
  background-color: ${(props) => (props.theme as Theme).corPrincipal};
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 12px;
  }
`

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 40px;
  }
`
