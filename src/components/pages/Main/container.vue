<script setup lang="ts">
import axios from 'axios'
import Main from './index.vue'
import { NowPlayingType } from '../../../api/types'

const { data } = await axios.get<NowPlayingType>(
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`
)

const mappedMovies = data.results.map(
  ({ poster_path, original_title, release_date }) => ({
    poster_path,
    original_title,
    release_date,
  })
)
</script>

<template>
  <Main :movies="mappedMovies" />
</template>
