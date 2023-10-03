<template>
  <div class="cadastroPessoas" style="margin-top: 60px;">
    <h1 class="titulo">Cadastro de Usuário</h1>
    <p class="descricao">Cadastre-se e comece a gerenciar suas atividades!</p>
    <div class="image-container">
      <img alt="Logo da Academia" src="../assets/gymlogo.jpg" class="logo-img">
    </div>
    <CadastroPe msg="Cadastro de Pessoas"/>
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
  color: #fff;
}

.titulo {
  margin-bottom: 20px; /* Adicionei margem na parte inferior do título */
}

.descricao {
  margin-top: 20px; /* Adicionei margem na parte superior do parágrafo */
}

.image-container {
  max-width: 200px;
  margin-bottom: -10px;
}

.logo-img {
  max-width: 200px;
  max-height: 150px;
  width: auto;
  height: auto;
  opacity: 0.8; /* Valor de opacidade (0 a 1) para tornar a imagem mais transparente */
  border-radius: 10px
}

</style>
