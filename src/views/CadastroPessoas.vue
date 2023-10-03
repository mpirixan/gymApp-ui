<template>
  <div class="cadastroPessoas" style="margin-top: 60px;">
    <h1 class="titulo">Cadastro de Pessoas</h1>
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
  height: 100vh; /* Altura total da tela */
  display: flex;
  flex-direction: column; /* Adicionei esta linha para garantir que os elementos sigam a ordem verticalmente */
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
  max-width: 200px; /* Largura máxima da imagem */
  margin-bottom: -10px; /* Espaço entre a imagem e o componente CadastroTreino */
}

.logo-img {
   max-width:200px;
    max-height:150px;
    width: auto;
    height: auto;
}

</style>
