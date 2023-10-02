<template>
  <div class="cadastroPessoas">
    <h1>Cadastro de Pessoas</h1>
    <div class="image-container">
      <img alt="Basa Logo" src="../assets/gymlogo.jpg" class="logo-img">
    </div>
    <Cadastro-pe msg="Cadastro de Pessoas"/>
  </div>
</template>

<script>
import CadastroPe from '../components/CadastroPe.vue'

export default {
  name: 'Cadastro',
  components: {
    CadastroPe
  }
}
</script>

<style scoped>
.cadastroPessoas {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.image-container {
  max-width: 200px; /* Largura máxima da imagem */
  margin-bottom: 20px; /* Espaço entre a imagem e o componente CadastroPe */
}

.logo-img {
  width: 100%; /* A imagem ocupará 100% da largura do seu contêiner pai */
}
</style>
