<template>
  <div class="buscarTreino">
    <h2>Use seu login da Plataforma</h2>
    <div class="container">
      <div class="Buscar">
        <div id="busca" class="search-container">
          <input type="text" id="email" placeholder="E-mail" class="search-input" />
          <input type="password" id="password" placeholder="Senha" class="search-input" />
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
function buscaNome () {
  function readBody (xhr) {
    var data
    if (!xhr.responseType || xhr.responseType === 'text') {
      data = xhr.responseText
    } else if (xhr.responseType === 'document') {
      data = xhr.responseXML
    } else {
      data = xhr.response
    }
    return data
  }

  var xhr = new XMLHttpRequest()
  var nome
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(readBody(xhr))
    }
  }
  const myURL = 'http://localhost:8080/api/v1/pessoas/nome/'
  xhr.open('get', myURL + nome, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(null)
}

export default {
  methods: {
    buscaNome () {
      buscaNome()
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
