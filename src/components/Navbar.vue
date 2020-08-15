<template lang="pug">
nav
  .nav-wrapper
    <router-link to="/" class="brand-logo left">Tasks</router-link>
    ul(id="nav-mobile" class="right hide-on-med-and-down")
      <router-link tag="li" to="/" exact active-class="active"></router-link>
        a(href="#") Create
      <router-link tag="li" to="/" active-class="active"></router-link>
        a(href="#") List

  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
</template>
