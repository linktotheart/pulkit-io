<template>
  <div class="wrapper">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
</style>
