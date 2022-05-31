<script setup lang="ts">
import Header from './components/atoms/Header/index.vue'
import Footer from './components/atoms/Footer/index.vue'
</script>

<template>
  <Header />
  <main class="main">bbb</main>
  <Footer />
</template>

<style lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  background-color: $sub-color;
}
</style>
