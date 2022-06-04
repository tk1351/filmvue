<script setup lang="ts">
import PersonCard from '../../atoms/PersonCard/index.vue'
import { ProviderDetails } from '../../../api/types'

type CastType = { id: number; profile_path: string | null; name: string }
type CrewType = {
  name: string
  profile_path: string | null
  id: number
  job: string
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
    director: CrewType[]
    writer?: CrewType[]
    producer?: CrewType[]
    photographer?: CrewType[]
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
    director: () => [],
    writer: () => [],
    producer: () => [],
    photographer: () => [],
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
      <li v-for="directorData in director" :key="directorData.id">
        <PersonCard
          :id="directorData.id"
          :profile_path="directorData.profile_path"
          :name="directorData.name"
          :department="directorData.job"
        />
      </li>
    </ul>
    <ul class="person__list">
      <li v-for="writerData in writer" :key="writerData.id">
        <PersonCard
          :id="writerData.id"
          :profile_path="writerData.profile_path"
          :name="writerData.name"
          :department="writerData.job"
        />
      </li>
    </ul>
    <ul class="person__list">
      <li v-for="producerData in producer" :key="producerData.id">
        <PersonCard
          :id="producerData.id"
          :profile_path="producerData.profile_path"
          :name="producerData.name"
          :department="producerData.job"
        />
      </li>
    </ul>
    <ul class="person__list">
      <li v-for="photographerData in photographer" :key="photographerData.id">
        <PersonCard
          :id="photographerData.id"
          :profile_path="photographerData.profile_path"
          :name="photographerData.name"
          :department="photographerData.job"
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
</style>
