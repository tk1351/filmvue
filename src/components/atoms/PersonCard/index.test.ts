import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PersonCard from './index.vue'
import MovieCard from '../MovieCard/index.vue'

describe('Testing PersonCard Component', () => {
  it('PersonCardコンポーネントが正しく表示されること', () => {
    const wrapper = mount(PersonCard)
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('Props', () => {
    describe('profile_path', () => {
      it('imgタグのsrc属性へ、正しく値が渡っていること', () => {
        const expectedSrc = 'expectedSrc'
        const wrapper = mount(PersonCard, {
          props: {
            profile_path: expectedSrc,
          },
        })
        const image = wrapper.find('img')
        expect(image.attributes('src')).toBe(expectedSrc)
      })
    })

    describe('name', () => {
      it('imgのalt属性へ、正しく値が渡っていること', () => {
        const expectedName = 'expectedName'
        const wrapper = mount(PersonCard, {
          props: {
            name: expectedName,
          },
        })
        const image = wrapper.find('img')
        expect(image.attributes('alt')).toBe(expectedName)
      })
      it('h3タグの中に、正しく値が渡っていること', () => {
        const expectedName = 'expectedName'
        const wrapper = mount(PersonCard, {
          props: {
            name: expectedName,
          },
        })
        expect(wrapper.find('h3').text()).toContain(expectedName)
      })
    })
    describe('department', () => {
      it('pタグに、正しく値が渡っていること', () => {
        const expectedDepartment = 'expectedDepartment'
        const wrapper = mount(PersonCard, {
          props: {
            department: expectedDepartment,
          },
        })
        expect(wrapper.find('p').text()).toContain(expectedDepartment)
      })
    })
  })

  describe('Event', () => {
    it('画像のリンクをクリックした時、click:linkイベントが1度実行されること', async () => {
      const wrapper = mount(PersonCard)
      await wrapper.find("[data-test-id='img-link']").trigger('click')
      expect(wrapper.emitted('click:link')).toHaveLength(1)
    })
    it('名前のリンクをクリックした時、click:linkイベントが1度実行されること', async () => {
      const wrapper = mount(PersonCard)
      await wrapper.find("[data-test-id='name-link']").trigger('click')
      expect(wrapper.emitted('click:link')).toHaveLength(1)
    })
  })
})
