import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from './index.vue'

describe('Testing Footer Component', () => {
  it('正しくFooterコンポーネントが表示されていること', () => {
    const wrapper = mount(Footer)
    expect(wrapper.element).toMatchSnapshot()
  })
})
