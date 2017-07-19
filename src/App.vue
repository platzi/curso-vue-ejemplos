<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 Filtros Avanzados

    div
      p {{ msg | yell }}
      p {{ now | date }}
      p {{ amount | currency('USD') }}
      a(v-bind:alt="amount | currency('USD')") Link
</template>

<script>
import yell from './filters/yell'
import date from './filters/date'
import currency from './filters/currency'

export default {
  name: 'app',

  filters: { yell, date, currency },

  data () {
    return {
      msg: 'My name is Ignacio',
      now: new Date(),
      amount: 299
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
