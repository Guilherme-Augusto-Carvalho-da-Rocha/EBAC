<script setup>
  import {reactive} from 'vue'

  let estado = reactive({
    operacao: '+',
    numero1: 1,
    numero2: 1,
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

  console.log(estado.resultado);
}
</script>

<template>
  <div class="container">
    <header class="m-3 p-5 text-center bg-light rounded">
      <h1>Calculadora de Media</h1>
    </header>
    <form>
      <div class="row justify-content-center">
        <div class="col-2 text-center">
          <label v-if="estado.operacao === '+'" for="numero1">Sumando</label>
          <label v-if="estado.operacao === '-'" for="numero1">Minuendo</label>
          <label v-if="estado.operacao === 'X'" for="numero1">Fator 1</label>
          <label v-if="estado.operacao === '/'" for="numero1">Dividendo</label>
          <input @keyup="evento => changeResultado(evento, 1)" type="number" class="form-control" id="numero1">
        </div>
        <div class="col-1 text-center">
          <label for="operacao">Operacao</label>
          <select @change="mudaOperacao" class="form-control text-center" id="operacao">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="X">X</option>
            <option value="/">/</option>
          </select>
        </div>
        <div class="col-2 text-center">
          <label v-if="estado.operacao === '+'" for="numero2">Sumando</label>
          <label v-if="estado.operacao === '-'" for="numero2">Subtraendo</label>
          <label v-if="estado.operacao === 'X'" for="numero2">Fator 2</label>
          <label v-if="estado.operacao === '/'" for="numero2">Divisor</label>
          <input @keyup="evento => changeResultado(evento, 2)" type="number" class="form-control" id="numero2">
        </div>
      </div>
    </form>
    <div class="resultado mt-5 text-center">
      <h2>A sua {{ getOperacaoPorExtenso() }} deu:</h2>
      <span class="fs-1">{{ estado.resultado }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>
