// Componente para buscar treinos por meio do email e senha do aluno
<template>
  <div class="buscarTreino">
    <h2>Use seu login da Plataforma</h2>
    <div class="container">
      <div class="Buscar">
        <div id="busca" class="search-container">
          <input v-model="email" type="text" placeholder="E-mail" class="search-input" />
          <input v-model="password" type="password" placeholder="Senha" class="search-input" />
          <button @click="busca" class="search-button">Buscar</button>
        </div>
      </div>
      <div class="Dados">
        <!-- Resultados da busca serão exibidos aqui -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async busca () {
      try {
        const response = await axios.get('http://localhost:8080/v1/treino/list/credentials', {
          params: {
            email: this.email,
            password: this.password
          },
          headers: {
            'Content-Type': 'application/json'
          }
        })

        console.log(response.data)
        // Lógica de tratamento de sucesso aqui
      } catch (error) {
        console.error(error)
        // Lógica de tratamento de erro aqui
      }
    }
  }
}
</script>

<style scoped>
.buscarTreino {
  text-align: center;
  padding: 20px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  width: 200px;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #45a049;
}
</style>
