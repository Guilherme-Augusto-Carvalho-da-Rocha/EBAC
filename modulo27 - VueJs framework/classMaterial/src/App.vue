<script setup>
import { reactive } from 'vue';

const nome = 'guilherme augusto';
//NAO PODE:
//document.querySelector('h1').innerHTML = nome;
const meuObj = {
  nome: 'Guilherme',
  filmeFav: 'Coraline'
}

function dizOla(nome) {
  return `${nome} diz ola para voce`
}

const USMImageLink = 'https://www.planocritico.com/wp-content/uploads/2024/06/ultimate-homem-aranha-vol-1-2024-plano-critico.jpg';
const XMImageLink = 'https://static1.srcdn.com/wordpress/wp-content/uploads/wm/2024/06/ultimate-x-men-vs-reboot-cyclops.jpg';
const botaoEstaDesabilitado = false;
let gostaDoUSM = true;
let gostaDosXM = true;

const estaAutorizado = true;

//let contador = 0;
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['Guilherme', 'Leonam', 'Nagashi'],
  nomeAInserir:'',
});

function incrementar(){
  estado.contador++;
}

function decrementar(){
  estado.contador--;
}

const alteraEmail = evento => estado.email = evento.target.value;
const defineTransferencia = evento => estado.transferindo = evento.target.value;

function mostraSaldoFuturo(){
  const {saldo, transferindo} = estado;
  return saldo - transferindo;
}

function validaTransferencia(){
  const {saldo, transferindo} = estado;
  return saldo >= transferindo;
}

const adicionaNome = evento => estado.nomeAInserir = evento.target.value; 

function cadastrarNome(){
  const {nomeAInserir, nomes}=estado;
  if(nomeAInserir.length >= 3){
    nomes.push(nomeAInserir)
  } else{
    alert('nome curto demais.')
  }
}


</script>

<template>
  <!-- usar dessas mustaches para fazer o DOM ({{  }}) -->
  <h1>{{dizOla('Lucas')}}</h1>
  <!-- tomar cuidado em deixar tudo junto pra nao dar conflito -->
  <img v-if="gostaDoUSM" :src="USMImageLink" alt="">
  <img v-else-if="gostaDosXM" :src="XMImageLink" alt="">
  <h2 v-else>Nao gosta dos mais famosos do novo ultiverse</h2>

  <h1 v-if="estaAutorizado">Seja Bem Vindo!!</h1>
  <h1 v-else>Nao possui acesso</h1>
  <button :disabled="botaoEstaDesabilitado">enviar mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferencia: {{ mostraSaldoFuturo() }} <br>
  <input :class="{invalido: !validaTransferencia()}" @keyup="defineTransferencia" type="number" placeholder="quantia para transferir"> <br>
  <button v-if="validaTransferencia()">Transferir</button>
  <span v-else>valor Invalido: o valor a transferir esta maior que o saldo atual</span>

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="adicionaNome" type="text" placeholder="Digite um nome para adicionar a lista">
  <button @click="cadastrarNome()" type="button">Cadastrar nome</button>
</template>

<style scoped>
img{
  max-width: 500px;
  width: 100%;
}

.invalido{
  outline-color: red;
  border-color: red;
}
</style>
