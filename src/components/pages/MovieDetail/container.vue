<script setup lang="ts">
import { useRoute } from 'vue-router'
import axios from 'axios'
import MovieDetail from './index.vue'
import { MovieDetailsType } from '../../../api/types'

const route = useRoute()
const movieId = Array.isArray(route.params.movieId) ? '' : route.params.movieId

const { data } = await axios.get<MovieDetailsType>(
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`
)

const {
  original_title,
  vote_average,
  release_date,
  runtime,
  poster_path,
  overview,
} = data
</script>

<template>
  <MovieDetail
    :original_title="original_title"
    :vote_average="vote_average"
    :release_date="release_date"
    :runtime="runtime"
    :poster_path="poster_path"
    :overview="overview"
  />
</template>
