<template>
  <div class="Home">
    <h1>Bem-vindo ao Gerenciador de Academia</h1>
    <p>Gerencie suas atividades físicas e acompanhe seu progresso aqui!</p>
    <div class="features">
      <div class="feature">
        <h2>Cadastre-se</h2>
        <p>Cadastre-se para ter acesso aos nossos serviços.</p>
        <router-link to="/cadastro"><button>Cadastrar</button></router-link>
      </div>
      <div class="feature">
        <h2>Registro de Treinos</h2>
        <p>Registre seus treinos e acompanhe seu progresso ao longo do tempo.</p>
        <router-link to="/cadastroTreino"><button>Registrar Treino</button></router-link>
      </div>
      <div class="feature">
        <h2>Sobre Nós</h2>
        <p>Conheça mais sobre nossa academia e equipe.</p>
        <router-link to="/about"><button>Saiba Mais</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.feature {
  width: 30%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.feature p {
  font-size: 16px;
  margin-bottom: 20px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>
