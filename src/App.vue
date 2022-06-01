<script setup lang="ts">
import Header from './components/atoms/Header/index.vue'
import Footer from './components/atoms/Footer/index.vue'
</script>

<template>
  <Header />
  <Suspense>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </Suspense>
  <Footer />
</template>

<style lang="scss">
.main-content {
  width: 100vw;
  min-height: calc(100vh - 70px - 160px);
  background-color: $sub-color;
}
</style>
