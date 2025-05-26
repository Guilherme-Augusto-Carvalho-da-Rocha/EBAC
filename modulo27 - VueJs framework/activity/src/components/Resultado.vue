<script setup>
const props = defineProps(['estado', 'getOperacaoPorExtenso'])
</script>

<template>
    <div class="resultado mt-5 text-center">
        <h2>A sua {{ getOperacaoPorExtenso() }} deu:</h2>
        <span class="fs-1">{{ estado.resultado }}</span>
    </div>
</template>
<!-- Assinado por Guilherme Augusto -->