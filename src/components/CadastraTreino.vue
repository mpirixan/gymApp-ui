// Componente criado para registrar treinos na plataforma

<template>
  <div class="cadastroTreino">
    <h3>Registrar Treino na Plataforma</h3>
    <div class="form-container">
      <div class="form-group">
        <label for="exercise">Nome do Exercício</label>
        <input type="text" id="exercise" />
      </div>
      <div class="form-group">
        <label for="sets">Número de Séries</label>
        <input type="number" id="sets" />
      </div>
      <div class="form-group">
        <label for="weight">Carga</label>
        <input type="number" id="weight" />
      </div>
      <div class="form-group">
        <label for="type">Tipo de Treino</label>
        <select id="type">
          <option value="Força">Força</option>
          <option value="Resistência">Resistência</option>
          <option value="Flexibilidade">Flexibilidade</option>
        </select>
      </div>
      <div class="form-group">
        <label for="email">Email do Usuário</label>
        <input type="email" id="email" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" />
      </div>
      <div class="form-group">
        <button @click="registrarTreino">Registrar</button>
      </div>
    </div>
  </div>
</template>

<script>
// Função para registrar treinos na plataforma
function registrarTreino () {
  var xhr = new XMLHttpRequest()
  var exercise = document.getElementById('exercise').value
  var sets = document.getElementById('sets').value
  var weight = document.getElementById('weight').value
  var type = document.getElementById('type').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  const treinoObj = {
    nome: exercise,
    serie: sets,
    carga: weight,
    tipoTreino: type,
    emailUser: email,
    password: password
  }

  var dataBase = JSON.stringify(treinoObj)
  const myURL = 'http://localhost:8080/v1/treino'

  console.log(treinoObj)
  console.log(dataBase)
  xhr.open('POST', myURL, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(treinoObj))
}

export default {
  methods: {
    registrarTreino () {
      registrarTreino()
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
.form-container {
  max-width: 410px;
  height: 530px;
  margin: -10px auto 0px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
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
  margin: 0px 0px 0px 18px;
}

button:hover {
  background-color: #ad3fcd;
}
</style>
