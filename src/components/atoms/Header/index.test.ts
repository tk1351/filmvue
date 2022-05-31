import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from './index.vue'

describe('Testing Header Component', () => {
  it('正しくHeaderコンポーネントが表示されていること', () => {
    const wrapper = mount(Header)
    expect(wrapper.element).toMatchSnapshot()
  })
})
