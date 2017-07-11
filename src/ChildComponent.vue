<template lang="pug">
  div
    h1 Este es un componente hijo
    local-component
</template>

<script>
  import LocalComponent from './LocalComponent.vue'

  export default {
    components: { LocalComponent }
  }
</script>
