import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from './index.vue'

describe('Testing Header Component', () => {
  it('正しくHeaderコンポーネントが表示されていること', () => {
    const wrapper = mount(Header)
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('Event', () => {
    it('Titleをクリックすると、 click:titleLink イベントが1回実行されること', async () => {
      const wrapper = mount(Header)
      await wrapper.find('[data-test-id="title-link"]').trigger('click')
      expect(wrapper.emitted('click:titleLink')).toHaveLength(1)
    })
  })
})
