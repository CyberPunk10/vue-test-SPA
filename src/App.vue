<template>
  <div id="app">

    <Navbar/>

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
@import ../node_modules/materialize-css/dist/css/materialize.min.css

.bg-color-vue
  background-color: #4fc08d

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

  textarea
    height: auto

</style>
