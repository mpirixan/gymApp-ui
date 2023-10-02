<template>
<div class="buscarTreino">
    <h1> Busque Seu Treino</h1>
    <BuscaTreino msg="Busca de Pessoas"/>
</div>
</template>

<script>
import BuscaTreino from '../components/BuscaTreino.vue'

export default {
  name: 'Busca',
  components: {
    BuscaTreino
  }
}
</script>

<style lang="stylus" scoped>
</style>
