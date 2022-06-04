<script setup lang="ts">
import { useRoute } from 'vue-router'
import axios from 'axios'
import MovieDetail from './index.vue'
import { MovieDetailsType, WatchProvidersType } from '../../../api/types'

const route = useRoute()
const movieId = Array.isArray(route.params.movieId) ? '' : route.params.movieId

const { data: movieData } = await axios.get<MovieDetailsType>(
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`
)

const { data: providersData } = await axios.get<WatchProvidersType>(
  `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${
    import.meta.env.VITE_API_KEY
  }`
)

const {
  original_title,
  vote_average,
  release_date,
  runtime,
  poster_path,
  overview,
} = movieData

const { results } = providersData
</script>

<template>
  <MovieDetail
    :original_title="original_title"
    :vote_average="vote_average"
    :release_date="release_date"
    :runtime="runtime"
    :poster_path="poster_path"
    :overview="overview"
    :rent="results.JP?.rent"
    :link="results.JP?.link"
  />
</template>
