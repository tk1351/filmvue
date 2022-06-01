<script setup lang="ts">
withDefaults(
  defineProps<{
    profile_path?: string | null
    name?: string
    department?: string
  }>(),
  {
    profile_path: '',
    name: '',
    department: undefined,
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
  <section class="person-card">
    <header>
      <a data-test-id="img-link" @click="handleLinkClick">
        <img class="person-card__img" :src="profile_path" :alt="name" />
      </a>
    </header>
    <div class="person-card__content">
      <h3 class="person-card__name">
        <a data-test-id="name-link" @click="handleLinkClick">{{ name }}</a>
      </h3>
      <p v-if="department">{{ department }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.person-card {
  width: 200px;
  height: 330px;
  border: 1px solid $main-color;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}

.person-card__img {
  width: 100%;
  height: 220px;
  border-radius: 30px 30px 0 0;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

.person-card__content {
  padding: 14px 20px;
  border-radius: 0 0 30px 30px;
  background-color: $main-color;
  flex-grow: 1;
}

.person-card__name {
  margin-bottom: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
