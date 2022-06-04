<script setup lang="ts">
import { useRouter } from 'vue-router'
import axios from 'axios'
import Main from './index.vue'
import { NowPlayingType } from '../../../api/types'

const router = useRouter()

const { data } = await axios.get<NowPlayingType>(
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`
)

const mappedMovies = data.results.map(
  ({ id, poster_path, original_title, release_date }) => ({
    id,
    poster_path,
    original_title,
    release_date,
  })
)

const handleLinkClick = (event: Event, id: number) => {
  router.push({
    name: '映画詳細ページ',
    params: { movieId: id },
  })
}
</script>

<template>
  <Main :movies="mappedMovies" @click:link="handleLinkClick" />
</template>
