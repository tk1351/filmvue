<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    initialValue?: string
    placeholder?: string
    width?: string
  }>(),
  {
    initialValue: '',
    placeholder: '',
    width: '100%',
  }
)

interface Emits {
  (eventName: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()

const inputValue = ref(props.initialValue)

const computedValue = computed({
  get: () => {
    return inputValue.value
  },
  set: (value: string) => {
    inputValue.value = value
    emit('update:modelValue', inputValue.value)
  },
})
</script>

<template>
  <input
    v-model="computedValue"
    type="text"
    class="input-form"
    :placeholder="placeholder"
  />
</template>

<style scoped lang="scss">
.input-form {
  width: v-bind(width);
  height: 40px;
  padding: 0 20px;
  color: $main-color;

  &::placeholder {
    color: $sub-color;
  }
}
</style>
