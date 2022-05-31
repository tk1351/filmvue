import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TextLink from './index.vue'

const wrapperFactory = () => {
  return mount(TextLink, {
    props: {
      title: 'title',
      href: 'href',
    },
  })
}

describe('Testing TextLink Component', () => {
  it('TextLinkコンポーネントが正しく表示されていること', () => {
    const wrapper = wrapperFactory()
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('Props', () => {
    describe('title', () => {
      it('渡された値が正しく表示されていること', () => {
        const expectedTitle = 'expectedTitle'
        const wrapper = mount(TextLink, {
          props: { title: expectedTitle },
        })
        expect(wrapper.text()).toBe(expectedTitle)
      })
    })
    describe('href', () => {
      it('href属性に正しく値が渡っていること', () => {
        const expectedHref = 'expectedHref'
        const wrapper = mount(TextLink, {
          props: { href: expectedHref },
        })
        expect(wrapper.attributes('href')).toBe(expectedHref)
      })
    })
    describe('color', () => {
      it('colorがprimaryの場合、.-primaryクラスが付与されていること', () => {
        const wrapper = mount(TextLink, {
          props: { color: 'primary' },
        })
        expect(wrapper.classes('-primary')).toBe(true)
      })
      it('colorがsecondaryの場合、.-secondaryクラスが付与されていること', () => {
        const wrapper = mount(TextLink, {
          props: { color: 'secondary' },
        })
        expect(wrapper.classes('-secondary')).toBe(true)
      })
    })
    describe('disabled', () => {
      it('disabledがtrueの場合、.-disabledクラスが付与されていること', () => {
        const wrapper = mount(TextLink, {
          props: { disabled: true },
        })
        expect(wrapper.classes('-disabled')).toBe(true)
      })

      it('disabledがfalseの場合、.-disabledクラスが付与されていないこと', () => {
        const wrapper = mount(TextLink, {
          props: { disabled: false },
        })
        expect(wrapper.classes('-disabled')).toBe(false)
      })
    })
  })

  describe('Event', () => {
    it('リンクをクリックした時、click:linkイベントが一度発動すること', async () => {
      const wrapper = wrapperFactory()
      await wrapper.trigger('click')
      expect(wrapper.emitted('click:link')).toHaveLength(1)
    })
  })
})
