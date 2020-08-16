<template lang="pug">
nav.bg-color-vue
  .nav-wrapper
    <router-link to="/" class="brand-logo">Tasks</router-link>
    ul(id="nav-mobile" class="right hide-on-med-and-down")
      li
        <router-link to="/" exact active-class="active">Create</router-link>
      li
        <router-link to="/list" active-class="active">List</router-link>

</template>

<style lang="sass" scoped>
nav
  padding: 0 1rem
</style>
