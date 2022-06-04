<script setup lang="ts">
import InputForm from '../../atoms/InputForm/index.vue'
import MovieCard from '../../atoms/MovieCard/index.vue'
import Box from '../../atoms/Box/index.vue'

type Movies = {
  id?: number
  poster_path?: string | null
  original_title?: string
  release_date?: string
}

withDefaults(defineProps<{ movies: Movies[] }>(), {
  movies: () => [],
})

interface Emits {
  (eventName: 'update:modelValue', value: string): void
  (eventName: 'click:link', event: Event, id: number): void
}
const emit = defineEmits<Emits>()

const handleInputValue = (value: string) => {
  emit('update:modelValue', value)
}

const handleLinkClick = (event: Event, id: number) => {
  emit('click:link', event, id)
}
</script>

<template>
  <InputForm @update:model-value="handleInputValue" />
  <Box padding="20px 0">
    <h2 class="main__title">Now Playing</h2>
    <ul class="movies-list">
      <li
        v-for="movie in movies"
        :key="movie.original_title"
        class="movies-list__item"
      >
        <MovieCard
          :id="movie.id"
          :poster_path="movie.poster_path"
          :original_title="movie.original_title"
          :release_date="movie.release_date"
          @click:link="handleLinkClick($event, movie.id)"
        />
      </li>
    </ul>
  </Box>
</template>

<style scoped lang="scss">
.main__title {
  margin-bottom: 20px;
}

.movies-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
