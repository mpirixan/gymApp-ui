<template>
<div class="buscaPessoas">
    <h1> Busca de Pessoas</h1>
    <img alt="Basa Logo" src="../assets/basalogo.jpg">
    <Busca msg="Busca de Pessoas"/>
</div>
</template>

<script>
import Busca from '../components/Busca.vue'

export default {
  name: 'Busca',
  components: {
    Busca
  }
}
</script>

<style lang="stylus" scoped>
img
  margin: 20px

</style>
