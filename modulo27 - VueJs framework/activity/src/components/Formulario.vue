<script setup>
const props = defineProps(['estado', 'mudaOperacao', 'changeResultado'])
</script>

<template>
    <form>
      <div class="row justify-content-center">
        <div class="col-2 text-center">
          <label v-if="props.estado.operacao === '+'" for="numero1">Sumando 1</label>
          <label v-if="props.estado.operacao === '-'" for="numero1">Minuendo</label>
          <label v-if="props.estado.operacao === 'X'" for="numero1">Fator 1</label>
          <label v-if="props.estado.operacao === '/'" for="numero1">Dividendo</label>
          <input @keyup="evento => props.changeResultado(evento, 1)" type="number" class="form-control" id="numero1">
        </div>
        <div class="col-1 text-center">
          <label for="operacao">Operacao</label>
          <select @change="evento => {props.mudaOperacao(evento); props.changeResultado(evento, 0)}" class="form-control text-center" id="operacao">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="X">X</option>
            <option value="/">/</option>
          </select>
        </div>
        <div class="col-2 text-center">
          <label v-if="props.estado.operacao === '+'" for="numero2">Sumando 2</label>
          <label v-if="props.estado.operacao === '-'" for="numero2">Subtraendo</label>
          <label v-if="props.estado.operacao === 'X'" for="numero2">Fator 2</label>
          <label v-if="props.estado.operacao === '/'" for="numero2">Divisor</label>
          <input @keyup="evento => props.changeResultado(evento, 2)" type="number" class="form-control" id="numero2">
        </div>
      </div>
    </form>
</template>