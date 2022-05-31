<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    href?: string
    color?: string
    disabled?: boolean
  }>(),
  {
    title: '',
    href: '',
    color: 'primary',
    disabled: false,
  }
)

const classObject = computed(() => {
  return {
    '-primary': props.color === 'primary',
    '-secondary': props.color === 'secondary',
    '-disabled': props.disabled,
  }
})

interface Emits {
  (eventName: 'click:link', event: Event): void
}
const emit = defineEmits<Emits>()

const handleClick = (event: Event) => {
  emit('click:link', event)
}
</script>

<template>
  <a :href="href" class="text-link" :class="classObject" @click="handleClick">{{
    title
  }}</a>
</template>

<style scoped lang="scss">
.text-link {
  &:hover {
    opacity: 0.8;
  }
}

.text-link.-primary {
  color: $main-color;
}

.text-link.-secondary {
  color: #ffffff;
}

.text-link.-disabled {
  pointer-events: none;
}
</style>
