<script setup lang="ts">
import TextLink from '../TextLink/index.vue'

const links = [
  { title: 'AAA', href: '#' },
  { title: 'BBB', href: '#' },
  { title: 'CCC', href: '#' },
]
</script>

<template>
  <header class="header">
    <h1>FilmVue</h1>
    <nav>
      <ul class="header__list">
        <li v-for="link in links" :key="link.title">
          <TextLink :href="link.href" :title="link.title" color="secondary" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 70px;
  padding: 0 40px;
  background-color: $main-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__list {
  display: flex;
  gap: 50px;
}
</style>
