<script setup>
  import {reactive} from 'vue'
  import Formulario from './components/Formulario.vue'
  import Cabecalho from './components/Cabecalho.vue'
  import Resultado from './components/Resultado.vue'

  let estado = reactive({
    operacao: '+',
    numero1: 0,
    numero2: 0,
    resultado: 0,
  })

  const mudaOperacao = evento => estado.operacao = evento.target.value;

  function getOperacaoPorExtenso(){
    const {operacao} = estado;
    switch(operacao){
      case '+':
        return "soma";
      case '-':
        return "subtracao";
      case 'X':
        return "multiplicacao";
      case '/':
        return "divisao";
    } 
  }

  function changeResultado(evento, qualNumero){
  if (qualNumero === 1) {
    estado.numero1 = Number(evento.target.value);
  } else if (qualNumero === 2) {
    estado.numero2 = Number(evento.target.value);
  }

  const { operacao, numero1, numero2 } = estado;

  switch(operacao){
    case '+':
      estado.resultado = numero1 + numero2;
      break;
    case '-':
      estado.resultado = numero1 - numero2;
      break;
    case 'X':
      estado.resultado = numero1 * numero2;
      break;
    case '/':
      estado.resultado = numero2 !== 0 ? numero1 / numero2 : 'Erro: divisão por zero';
      break;
  }
}
</script>

<template>
  <div class="container">
    <Cabecalho />
    <Formulario :estado="estado" :change-resultado="changeResultado" :muda-operacao="mudaOperacao"/>
    <Resultado :estado="estado" :get-operacao-por-extenso="getOperacaoPorExtenso"/>
  </div>
</template>

<style scoped>
</style>
