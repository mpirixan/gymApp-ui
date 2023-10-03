<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link> |
      <router-link to="/about" class="nav-link">Sobre</router-link> |
      <router-link to="/cadastro" class="nav-link">Cadastro</router-link> |
      <router-link to="/Busca" class="nav-link">Buscar Treino</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  margin-top -9px
  color #fff
  background: linear-gradient(to bottom, #af8bf2, #1c1626);
  height: 100vh;

.navbar
  background-color #574579
  padding 15px 0 10px 0  // Aumentei o padding superior para deixar a barra mais alta
  display flex
  justify-content center

.nav-link
  color #fff
  text-decoration none
  margin 0 20px  // Aumentei a margem para espaçamento entre os links
  font-weight bold
  transition: color 0.3s ease;  // Adicionei uma transição para suavizar a mudança de cor

.nav-link:hover
  color #ad3fcd  // Cor lilás quando o cursor passar por cima
  text-decoration underline
</style>
