// Componente para buscar treinos por meio do email e senha do aluno
<template>
  <div class="buscarTreino">
    <notifications group="treino" />
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
        <div v-if="dadosTreino && dadosTreino.length > 0">
          <h3>Detalhes do Treino</h3>
          <div v-for="(treino, index) in dadosTreino" :key="index">
            <p><strong>Exercício:</strong> {{ treino.nome }}</p>
            <p><strong>Séries:</strong> {{ treino.serie }}</p>
            <p><strong>Carga:</strong> {{ treino.carga }}</p>
            <p><strong>Tipo de Treino:</strong> {{ treino.tipoTreino }}</p>
            <hr>
          </div>
        </div>
        <div v-else-if="buscaFeita">
          <p>Nenhum treino encontrado para as credenciais fornecidas.</p>
        </div>
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
      password: '',
      dadosTreino: {
        nome: '',
        serie: '',
        carga: '',
        tipoTreino: ''
      },
      buscaFeita: false
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

        if (Array.isArray(response.data) && response.data.length > 0) {
          // Se houver dados na lista, atribua o primeiro item a dadosTreino
          this.dadosTreino = response.data
          this.$notify({
            group: 'treino',
            title: 'Registro bem-sucedido',
            text: 'Treinos encontrados com sucesso',
            type: 'success'
          })
        } else {
          // Caso contrário, defina dadosTreino como null para indicar que nenhum treino foi encontrado
          this.dadosTreino = null
        }

        this.buscaFeita = true
      } catch (error) {
        console.error(error)
        this.$notify({
          group: 'treino',
          title: 'Erro de registro',
          text: error.message,
          type: 'error'
        })
        this.dadosTreino = null
        this.buscaFeita = true
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
  background-color: #ad3fcd;
}

/* Estilos para a visualização do treino retornado */
 .Dados {
  background-color: #cacae2;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: #000;
}

.Dados h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.Dados p {
  font-size: 18px;
  margin-bottom: 10px;
}

</style>
