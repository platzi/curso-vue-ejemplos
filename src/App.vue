<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 Vuex

    div
      h1 Contador
      p {{ count }} {{ stringTest }}

      div
        button(@click="increment") +
        button(@click="decrement") -
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',

  data () {
    return {
      test: 'test'
    }
  },

  computed: {
    ...mapState(['count']),

    stringTest () {
      return this.test
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
