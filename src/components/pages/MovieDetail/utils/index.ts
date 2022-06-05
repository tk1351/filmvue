import axios from 'axios'
import {
  MovieCreditsType,
  MovieDetailsType,
  SimilarMoviesType,
  WatchProvidersType,
} from '../../../../api/types'

export const fetchMovieDetails = async (id: string) => {
  const { data } = await axios.get<MovieDetailsType>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  )
  return data
}

export const fetchProviders = async (id: string) => {
  const { data } = await axios.get<WatchProvidersType>(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  )
  return data
}

export const fetchCredits = async (id: string) => {
  const { data } = await axios.get<MovieCreditsType>(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  )
  return data
}

export const fetchSimilar = async (id: string) => {
  const { data } = await axios.get<SimilarMoviesType>(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  )
  return data
}
