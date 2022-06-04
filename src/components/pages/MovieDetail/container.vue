<script setup lang="ts">
import { useRoute } from 'vue-router'
import axios from 'axios'
import MovieDetail from './index.vue'
import {
  CrewType,
  MovieCreditsType,
  MovieDetailsType,
  WatchProvidersType,
} from '../../../api/types'
import { mapJob } from './type'

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

const { data: creditsData } = await axios.get<MovieCreditsType>(
  `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
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
} = movieData

const { results } = providersData

const { cast, crew } = creditsData

const mappedCast = cast.slice(0, 20).map(({ profile_path, name, id }) => ({
  id,
  profile_path,
  name,
}))

const director = crew.filter(({ job }) => job === mapJob.director)
const writer = crew.filter(({ job }) => job === mapJob.writer)
const producer = crew.filter(({ job }) => job === mapJob.producer)
const photographer = crew.filter(({ job }) => job === mapJob.photographer)

const crews = [...director, ...writer, ...producer, ...photographer]

const mappedCrew = (crew: CrewType[]) => {
  return crew.map(({ id, profile_path, name, job }) => ({
    id,
    profile_path,
    name,
    job,
  }))
}
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
    :cast="mappedCast"
    :director="mappedCrew(crews)"
  />
</template>
