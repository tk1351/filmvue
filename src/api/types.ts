type BaseType<T> = {
  page: number
  results: T[]
  dates: {
    maximum: string
    minimum: string
  }
  total_pages: number
  total_results: number
}

type MovieResult = {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

type MovieDetails = {
  belongs_to_collection: null | object
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string | null
  imdb_id: string | null
  production_companies: {
    name: string
    id: number
    logo_path: string | null
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  revenue: number
  runtime: number | null
  spoken_languages: {
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string | null
} & Omit<MovieResult, 'genre_ids'>

type ListDetails<T> = {
  created_by: string
  description: string
  favorite_count: number
  id: string
  items: T[]
  item_count: number
  iso_639_1: string
  name: string
  poster_path: string | null
}

type CreateListBody = {
  name: string
  description: string
  language: string
}

type AddMovieBody = {
  media_id: number
}

type RemoveMovieBody = AddMovieBody

type CreateListResponse = {
  status_message: string
  success: boolean
  status_code: number
  list_id: number
}

type AddMovieResponse = {
  status_code: number
  status_message: string
}

type RemoveMovieResponse = AddMovieResponse

type ClearMovieResponse = AddMovieResponse

type DeleteMovieResponse = AddMovieResponse

export type NowPlayingType = BaseType<MovieResult>
export type SimilarMoviesType = Omit<BaseType<MovieResult>, 'dates'>
export type MovieDetailsType = MovieDetails
export type SearchMoviesType = Omit<BaseType<MovieResult>, 'dates'>
export type ListDetailsType = ListDetails<MovieResult>
export type CreateListBodyType = CreateListBody
export type CreateListResponseType = CreateListResponse
export type AddMovieBodyType = AddMovieBody
export type AddMovieResponseType = AddMovieResponse
export type RemoveMovieBodyType = RemoveMovieBody
export type RemoveMovieResponseType = RemoveMovieResponse
export type ClearMovieResponseType = ClearMovieResponse
export type DeleteMovieResponseType = DeleteMovieResponse
