// componente de cadastro de pessoas
<template>
  <div class="cadastroPessoas">
    <notifications group="foo" />
    <div class="form-container">
      <div class="form-group">
        <label for="username">Usuário</label>
        <input v-model="formData.username" type="text" id="username" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input v-model="formData.password" type="password" id="password" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="formData.email" type="email" id="email" />
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input v-model="formData.phone" type="tel" id="phone" />
      </div>
      <div class="form-group">
        <button @click="cadastro">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    async cadastro () {
      const myURL = 'http://localhost:8080/v1/user'

      try {
        const response = await fetch(myURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })

        if (response.ok) {
          // Cadastro bem-sucedido
          this.$notify({
            group: 'foo',
            title: 'Cadastro bem-sucedido',
            text: 'Usuário cadastrado com sucesso',
            type: 'success'
          })
          // Limpar os campos do formulário
          this.clearForm()
        } else {
          // Tratar erros de cadastro
          this.$notify({
            group: 'foo',
            title: 'Erro de cadastro',
            text: 'Ocorreu um erro ao cadastrar o usuário.',
            type: 'error'
          })
        }
      } catch (error) {
        console.error('Erro ao realizar o cadastro:', error)
      }
    },
    clearForm () {
      this.formData.username = ''
      this.formData.password = ''
      this.formData.email = ''
      this.formData.phone = ''
    }
  }
}
</script>

<style>
/* Estilos específicos para este componente */
.form-container {
  max-width: 410px;
  height: 410px;
  margin: 50px auto 100px auto;
  padding: 20px;
  border: 1px solid #cacae2;
  border-radius: 10px;
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
input[type="password"],
input[type="email"],
input[type="tel"] {
  width: 350PX;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 200px; /* Largura menor */
  padding: 10px;
  font-size: 18px; /* Tamanho da fonte menor */
  background-color: #45a049;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* Centralizar o botão */
  margin: 20px 0px  18px
}

button:hover {
  background-color: #ad3fcd ;
}
</style>
