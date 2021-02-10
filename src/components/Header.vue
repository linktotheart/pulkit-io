<template>
  <header class="main-header">
    <div class="header d-flex align-items-center justify-content-between">
      <a href="./" class="logo">
        <img src="@/assets/img/logo.svg" width="50" alt="site-title" />
      </a>
      <nav class="nav d-flex">
        <g-link class="nav-link" to="/">Home</g-link>
        <g-link class="nav-link" to="/work">Works</g-link>
        <g-link class="nav-link" to="/blog">Blog</g-link>
        <g-link class="nav-link" to="/about">About</g-link>
        <g-link class="nav-link button" to="/contact">Contact</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.main-header {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>