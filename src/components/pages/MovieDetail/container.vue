<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MovieDetail from './index.vue'
import { mapJob } from './type'
import {
  fetchCredits,
  fetchMovieDetails,
  fetchProviders,
  fetchSimilar,
} from './utils'

const router = useRouter()
const route = useRoute()
const movieId = Array.isArray(route.params.movieId) ? '' : route.params.movieId

const movieData = ref(await fetchMovieDetails(movieId))
const providersData = ref(await fetchProviders(movieId))
const creditsData = ref(await fetchCredits(movieId))
const similarData = ref(await fetchSimilar(movieId))

const mappedCast = computed(() => {
  return creditsData.value.cast
    .slice(0, 20)
    .map(({ profile_path, name, id }) => ({
      id,
      profile_path,
      name,
    }))
})

const director = computed(() => {
  return creditsData.value.crew.filter(({ job }) => job === mapJob.director)
})
const writer = computed(() => {
  return creditsData.value.crew.filter(({ job }) => job === mapJob.writer)
})
const producer = computed(() => {
  return creditsData.value.crew.filter(({ job }) => job === mapJob.producer)
})
const photographer = computed(() => {
  return creditsData.value.crew.filter(({ job }) => job === mapJob.photographer)
})

const crews = computed(() => {
  return [
    ...director.value,
    ...writer.value,
    ...producer.value,
    ...photographer.value,
  ]
})

const mappedCrew = computed(() => {
  return crews.value.map(({ id, profile_path, name, job }) => ({
    id,
    profile_path,
    name,
    job,
  }))
})

const mappedSimilar = computed(() => {
  return similarData.value.results.map(
    ({ id, poster_path, original_title, release_date }) => ({
      id,
      poster_path,
      original_title,
      release_date,
    })
  )
})

const handleLinkClick = (event: Event, id: number) => {
  router.push({
    name: '映画詳細ページ',
    params: { movieId: id },
  })
}

watch(route, async () => {
  const movieId = Array.isArray(route.params.movieId)
    ? ''
    : route.params.movieId
  movieData.value = await fetchMovieDetails(movieId)
  providersData.value = await fetchProviders(movieId)
  creditsData.value = await fetchCredits(movieId)
  similarData.value = await fetchSimilar(movieId)
})
</script>

<template>
  <MovieDetail
    :original_title="movieData.original_title"
    :vote_average="movieData.vote_average"
    :release_date="movieData.release_date"
    :runtime="movieData.runtime"
    :poster_path="movieData.poster_path"
    :overview="movieData.overview"
    :rent="providersData.results.JP?.rent"
    :link="providersData.results.JP?.link"
    :cast="mappedCast"
    :crews="mappedCrew"
    :similar="mappedSimilar"
    @click:link="handleLinkClick"
  />
</template>
