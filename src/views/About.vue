<template>
  <div class="about">
   <div class="image-container">
      <img alt="Logo da Academia" src="../assets/gobig.jpg" class="logo-img">
    </div>
    <h1>Sobre o Gerenciador de Treinos</h1>
    <p>O Gerenciador de Treinos é uma aplicação projetada para ajudar academias a organizar e controlar os treinos de seus alunos de maneira eficaz. Com recursos avançados, nossa plataforma oferece uma experiência de treino personalizada e eficiente para todos os usuários.</p>

    <h2>Principais Recursos</h2>
    <ul>
      <li>Agendamento de Treinos: Agende facilmente treinos para os alunos, indicando datas, horários e instrutores disponíveis.</li>
      <li>Monitoramento de Progresso: Acompanhe o progresso dos alunos, incluindo peso, medidas, desempenho em exercícios e metas atingidas.</li>
      <li>Personalização de Treinos: Crie planos de treino personalizados com base nas necessidades e objetivos individuais dos alunos.</li>
      <li>Comunicação Eficiente: Facilite a comunicação entre instrutores e alunos, possibilitando o compartilhamento de dicas, orientações e atualizações.</li>
    </ul>

    <h2>Nossa Missão</h2>
    <p>Nossa missão é proporcionar aos alunos uma experiência de treino excepcional, ajudando-os a atingir seus objetivos de forma saudável e eficaz. Estamos comprometidos em apoiar academias na gestão eficiente de seus treinos, promovendo um estilo de vida ativo e saudável para todos.</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

p {
  font-size: 16px;
}

.image-container {
  max-width: 500px; /* Largura máxima da imagem */
  margin-bottom: -10px; /* Espaço entre a imagem e o componente CadastroTreino */
}

.logo-img {
   max-width:400px;
    max-height:300px;
    width: auto;
    height: auto;
}
</style>
