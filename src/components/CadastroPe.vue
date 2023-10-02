<template>
    <div class="cadastroPessoas">
        <h2>Cadastrar Pessoas na Plataforma</h2>
              <div class="grid-container">
                  <div class="grid-labels">
                    <label for="user">username</label>
                    <label for="senha">password</label>
                    <label for="email">email</label>
                    <label for="phone">phone</label>
                  </div>
                  <div class="grid-inputs">
                    <input type="text" id="username" />
                    <input type="text" id="password" />
                    <input type="text" id="email" />
                    <input type="text" id="phone" />
                  </div>
                  <div class="grid-item">
                      <div id="cadastro">
                        <button v-on:click="cadastro()">Cadastro</button>
                      </div>
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

<style lang="stylus">
.grid-labels{
  grid-area: Label
  display: inline-grid
  justify-items: center
  align-items: center
  }

.grid-inputs{
  grid-area: Inputs
  display: inline-grid
  justify-items: center
  align-items: center}

.grid-item{
  grid-area: Button}

.grid-container{
  background: lightblue
  border: 2px solid #13b523
  border-radius: 3px
  display: inline-grid
  grid-template-columns: 1fr 1fr
  grid-template-rows: 1fr 1fr 1fr 1.1fr 0.8fr 1.1fr
  gap: 0px 0px
  grid-template-areas:
    "Label Inputs"\
    "Label Inputs"\
    "Label Inputs"\
    "Label Inputs"\
    "Label Inputs"\
    "Button Button"
}
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

label
  display: grid
  color dark
  margin 30px

input
  display: grid
  height: 18%
  width: 90%
  margin: 10px

button
  color dark
  width: 50%
  height: 50%
</style>
