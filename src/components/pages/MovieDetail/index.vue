<script setup lang="ts">
withDefaults(
  defineProps<{
    original_title?: string
    vote_average?: number
    release_date?: string
    runtime?: number | null
    poster_path?: string | null
    overview?: string
  }>(),
  {
    original_title: '',
    vote_average: 0,
    runtime: 0,
    release_date: '',
    poster_path: '',
    overview: '',
  }
)
</script>

<template>
  <section>
    <header class="movie-detail__header">
      <h2>{{ original_title }}</h2>
      <p>{{ vote_average }}</p>
    </header>
    <div class="movie-detail__info">
      <p>{{ release_date }}</p>
      <p>{{ runtime }}m</p>
    </div>
    <div class="movie-detail__content">
      <img
        :src="`https://image.tmdb.org/t/p/original${poster_path}`"
        :alt="original_title"
        class="movie-detail__img"
      />
      <div>
        <strong>About the Movie</strong>
        <p class="movie-detail__description">
          {{ overview }}
        </p>
        <div class="movie-detail__providers">
          <strong>Watch Providers</strong>
          <ul class="movie-detail__list">
            <li>Amazon Prime</li>
            <li>U-NEXT</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.movie-detail__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.movie-detail__info {
  display: flex;
  justify-content: space-between;
  width: 300px;
}

.movie-detail__content {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.movie-detail__img {
  min-width: 300px;
  height: 430px;
}

.movie-detail__description {
  margin-top: 14px;
  max-width: 850px;
}

.movie-detail__providers {
  margin-top: 30px;
}

.movie-detail__list {
  display: flex;
  gap: 30px;
  margin-top: 14px;
}
</style>
