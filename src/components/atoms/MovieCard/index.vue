<script setup lang="ts">
withDefaults(
  defineProps<{
    poster_path?: string | null
    original_title?: string
    release_date?: string
  }>(),
  {
    poster_path: '',
    original_title: '',
    release_date: '',
  }
)

interface Emits {
  (eventName: 'click:link', event: Event): void
}
const emit = defineEmits<Emits>()

const handleLinkClick = (event: Event) => {
  event.preventDefault()
  emit('click:link', event)
}
</script>

<template>
  <section class="movie-card">
    <header>
      <a data-test-id="img-link" @click="handleLinkClick">
        <img class="movie-card__img" :alt="original_title" :src="poster_path" />
      </a>
    </header>
    <div class="movie-card__content">
      <h3 class="movie-card__title">
        <a data-test-id="title-link" @click="handleLinkClick">{{
          original_title
        }}</a>
      </h3>
      <p class="movie-card__date">{{ release_date }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.movie-card {
  width: 300px;
  height: 350px;
  border: 1px solid $main-color;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}

.movie-card__img {
  width: 100%;
  height: 220px;
  border-radius: 30px 30px 0 0;

  &:hover {
    opacity: 0.8;
  }
}

.movie-card__content {
  padding: 14px 20px;
  border-radius: 0 0 30px 30px;
  background-color: $main-color;
  flex-grow: 1;
}

.movie-card__title {
  margin-bottom: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  &:hover {
    opacity: 0.8;
  }
}
</style>
