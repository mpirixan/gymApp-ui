<template>
  <div class="cadastroPessoas">
    <h2>Cadastrar Pessoas na Plataforma</h2>
    <div class="form-container">
      <div class="form-group">
        <label for="username">Usuário</label>
        <input type="text" id="username" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input type="tel" id="phone" />
      </div>
      <div class="form-group">
        <button @click="cadastro">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
function cadastro () {
  var xhr = new XMLHttpRequest()
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  var email = document.getElementById('email').value
  var phone = document.getElementById('phone').value

  const jsonObj =
{
  username: username,
  password: password,
  email: email,
  phone: phone
}
  var dataBase = JSON.stringify(jsonObj)
  const myURL = 'http://localhost:8080/v1/user'

  console.log(jsonObj)
  console.log(dataBase)
  xhr.open('POST', myURL, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(jsonObj))
}

export default {
  methods: {
    cadastro () {
      cadastro()
    }
  }

}

</script>

<style scoped>
/* Estilos específicos para este componente */
.form-container {
  max-width: 410px;
  height: 410px;
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
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* Centralizar o botão */
  margin: 20px 0px 30px 18px
}

button:hover {
  background-color: #45a049;
}
</style>
