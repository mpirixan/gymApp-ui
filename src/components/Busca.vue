<template>
    <div class="buscarPessoas">
        <h2>Buscar Pessoas na Plataforma</h2>
            <div class="container">
                <div class="Buscar">
                  <div id="busca">
                    <input type="text" id="nome" Nome />
                    <button v-on:click="busca()">Buscar</button>
                  </div>
                  </div>
                <div class="Dados"></div>
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

<style lang="stylus">
.container {
  display: grid
  grid-auto-rows: 1fr
  grid-template-columns: 1fr
  grid-template-rows: 1fr 0.8fr
  gap: 0px 0px
  grid-template-areas:
    "Buscar"\
    "Dados";
}

.Buscar { grid-area: Buscar; }
.Dados { grid-area: Dados; }

h2
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

input
  display: grid
  height: 18%
  width: 90%
  margin: 10px
</style>
