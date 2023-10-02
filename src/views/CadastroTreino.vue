<template>
  <div class="cadastroTreinos">
    <h1>Cadastro de Treinos</h1>
    <div class="image-container">
      <img alt="Logo da Academia" src="../assets/gymlogo.jpg" class="logo-img">
    </div>
    <CadastroTreino msg="Cadastro de Treinos"/>
  </div>
</template>

<script>
import CadastroTreino from '../components/CadastraTreino.vue'

export default {
  name: 'CadastroTreinos',
  components: {
    CadastroTreino
  }
}
</script>

<style scoped>
.cadastroTreinos {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.image-container {
  max-width: 200px; /* Largura máxima da imagem */
  margin-bottom: 20px; /* Espaço entre a imagem e o componente CadastroTreino */
}

.logo-img {
  width: 100%; /* A imagem ocupará 100% da largura do seu contêiner pai */
}
</style>
