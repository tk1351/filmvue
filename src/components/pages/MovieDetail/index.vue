<script setup lang="ts">
import PersonCard from '../../atoms/PersonCard/index.vue'
import MovieCard from '../../atoms/MovieCard/index.vue'
import { ProviderDetails } from '../../../api/types'

type CastType = { id: number; profile_path: string | null; name: string }
type CrewType = {
  name: string
  profile_path: string | null
  id: number
  job: string
}
type Similar = {
  id?: number
  poster_path?: string | null
  original_title?: string
  release_date?: string
}

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
    cast?: CastType[]
    crews: CrewType[]
    similar?: Similar[]
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
    cast: () => [],
    crews: () => [],
    similar: () => [],
  }
)

interface Emits {
  (eventName: 'click:link', event: Event, id: number): void
}
const emit = defineEmits<Emits>()

const handleLinkClick = (event: Event, id: number) => {
  emit('click:link', event, id)
}
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
  <div>
    <h3>Casts</h3>
    <ul class="person__list">
      <li v-for="castData in cast" :key="castData.id">
        <PersonCard
          :id="castData.id"
          :profile_path="castData.profile_path"
          :name="castData.name"
        />
      </li>
    </ul>
    <h3>Crews</h3>
    <ul class="person__list">
      <li v-for="crewsData in crews" :key="crewsData.id">
        <PersonCard
          :id="crewsData.id"
          :profile_path="crewsData.profile_path"
          :name="crewsData.name"
          :department="crewsData.job"
        />
      </li>
    </ul>
  </div>
  <div>
    <h3>Similar Movies</h3>
    <ul class="similar__list">
      <li v-for="similarData in similar" :key="similarData.id">
        <MovieCard
          :id="similarData.id"
          :poster_path="similarData.poster_path"
          :original_title="similarData.original_title"
          :release_date="similarData.release_date"
          @click:link="handleLinkClick($event, similarData.id)"
        />
      </li>
    </ul>
  </div>
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

.person__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
}

.similar__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 20px;
  column-gap: 26px;
}
</style>
