<script setup lang="ts">
withDefaults(defineProps<{ padding?: string }>(), {
  padding: '',
})
</script>

<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.box {
  padding: v-bind(padding);
}
</style>
