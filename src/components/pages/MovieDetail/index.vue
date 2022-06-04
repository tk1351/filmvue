<script setup lang="ts">
import { ProviderDetails } from '../../../api/types'

withDefaults(
  defineProps<{
    original_title?: string
    vote_average?: number
    release_date?: string
    runtime?: number | null
    poster_path?: string | null
    overview?: string
    rent?: ProviderDetails[] | undefined
    link?: string | undefined
  }>(),
  {
    original_title: '',
    vote_average: 0,
    runtime: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    rent: () => [],
    link: '',
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
        <div v-if="rent.length > 0" class="movie-detail__providers">
          <strong>Watch Providers by JustWatch</strong>
          <ul class="movie-detail__list">
            <li v-for="data in rent" :key="data.provider_id">
              <a :href="link" target="_blank" rel="noopener">
                <img
                  class="provider__img"
                  :src="`https://image.tmdb.org/t/p/original${data.logo_path}`"
                  :alt="data.provider_name"
                />
              </a>
            </li>
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
  margin-top: 5px;
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

.provider__img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
