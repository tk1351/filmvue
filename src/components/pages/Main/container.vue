<script setup lang="ts">
import Main from './index.vue'

const dummyMovies = [
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title2',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title3',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title4',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title5',
    release_date: '2022/01/01',
  },
]
</script>

<template>
  <Main :movies="dummyMovies" />
</template>
