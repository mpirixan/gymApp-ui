// Componente criado para registrar treinos na plataforma

<template>
  <div class="registrarTreino">
    <notifications group="treino" />
    <div class="form-container">
      <div class="form-group">
        <label for="exercise">Exercício</label>
        <input v-model="formData.exercise" type="text" id="exercise" />
      </div>
      <div class="form-group">
        <label for="sets">Séries</label>
        <input v-model="formData.sets" type="number" id="sets" />
      </div>
      <div class="form-group">
        <label for="weight">Carga</label>
        <input v-model="formData.weight" type="text" id="weight" />
      </div>
      <div class="form-group">
        <label for="type">Tipo de Treino</label>
        <input v-model="formData.type" type="text" id="type" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="formData.email" type="email" id="email" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input v-model="formData.password" type="password" id="password" />
      </div>
      <div class="form-group">
        <button @click="registrarTreino">Registrar Treino</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        exercise: '',
        sets: '',
        weight: '',
        type: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async registrarTreino () {
      const myURL = 'http://localhost:8080/v1/treino'
      const treinoObj = {
        nome: this.formData.exercise,
        serie: this.formData.sets,
        carga: this.formData.weight,
        tipoTreino: this.formData.type,
        emailUser: this.formData.email,
        password: this.formData.password
      }

      try {
        const response = await fetch(myURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(treinoObj)
        })

        if (response.ok) {
          // Registro bem-sucedido
          this.$notify({
            group: 'treino',
            title: 'Registro bem-sucedido',
            text: 'Treino registrado com sucesso',
            type: 'success'
          })
          // Limpar os campos do formulário
          this.clearForm()
        } else {
          // Tratar erros de registro
          this.$notify({
            group: 'treino',
            title: 'Erro de registro',
            text: 'Ocorreu um erro ao registrar o treino.',
            type: 'error'
          })
        }
      } catch (error) {
        console.error('Erro ao registrar o treino:', error)
        this.$notify({
          group: 'treino',
          title: 'Erro de registro',
          text: 'Ocorreu um erro ao registrar o treino.',
          type: 'error'
        })
      }
    },
    clearForm () {
      for (const key in this.formData) {
        this.formData[key] = ''
      }
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
.form-container {
  max-width: 410px;
  height: 460px;
  margin: 50px auto 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff;
}

input[type="text"],
input[type="number"],
input[type="email"] {
  width: 350px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select {
  width: 350px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 200px;
  padding: 10px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0px 30px 18px;
}

button:hover {
  background-color: #45a049;
}
</style>
