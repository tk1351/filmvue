import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import App from './App.vue'

test('Testing App Component', () => {
  const wrapper = mount(App)
  expect(wrapper.exists()).toBe(true)
})
