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

.bg-color-vue, .btn
  background-color: #4fc08d
h3
  margin-top: 3rem
  margin-bottom: 4rem
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

  textarea
    height: auto

.post-tag
  margin: 0 .5rem 0 0
  display: inline-block

.post-tag a
  background-color: #e0e0e0
  border-radius: 0 2px 2px 0
  color: #555
  display: inline-block
  font-size: 11px
  line-height: 13px
  margin: 0 0 2px 10px
  padding: 4px 7px 3px
  position: relative
  text-transform: uppercase
  transition: 0.2s line
  -webkit-transition: 0.2s linear
  -moz-transition: 0.2s linear
  -o-transition: 0.2s linear

.post-tag a:before
  border-top: 10px solid transparent
  border-right: 8px solid #e0e0e0
  border-bottom: 10px solid transparent
  content: ""
  height: 0
  position: absolute
  top: 0
  left: -8px
  width: 0
  transition: 0.2s linear
  -webkit-transition: 0.2s linear
  -moz-transition: 0.2s linear
  -o-transition: 0.2s linear

.post-tag a:after
  background-color: #fff
  border-radius: 50%
  content: ""
  height: 4px
  position: absolute
  top: 8px
  left: -2px
  width: 4px

.post-tag a:hover
  background: #ccc
  color: #222

.post-tag a:hover:before
  border-right-color: #ccc
</style>
