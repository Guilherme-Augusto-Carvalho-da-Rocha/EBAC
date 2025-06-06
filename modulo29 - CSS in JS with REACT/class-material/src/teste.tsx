import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

const Teste = () => {
  return (
    <div>
      <Botao fontSize="18px" principal={true}>
        diz Ola!
      </Botao>
      <Botao fontSize="14px" principal={false}>
        nao eh o principal
      </Botao>
      <BotaoPerigo>
        Esse botao eh perigoso!! <span>cuidado!</span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste
