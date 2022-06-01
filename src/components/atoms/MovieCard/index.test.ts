import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieCard from './index.vue'

describe('Testing MovieCard Component', () => {
  it('正しくMovieCardコンポーネントが表示されていること', () => {
    const wrapper = mount(MovieCard)
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('Props', () => {
    describe('poster_path', () => {
      it('imgタグのsrc属性へ、正しく値が渡っていること', () => {
        const expectedSrc = 'expectedSrc'
        const wrapper = mount(MovieCard, {
          props: {
            poster_path: expectedSrc,
          },
        })
        const image = wrapper.find('img')
        expect(image.attributes('src')).toBe(expectedSrc)
      })
    })

    describe('original_title', () => {
      it('imgのalt属性へ、正しく値が渡っていること', () => {
        const expectedTitle = 'expectedTitle'
        const wrapper = mount(MovieCard, {
          props: {
            original_title: expectedTitle,
          },
        })
        const image = wrapper.find('img')
        expect(image.attributes('alt')).toBe(expectedTitle)
      })
      it('h3タグの中に、正しく値が渡っていること', () => {
        const expectedTitle = 'expectedTitle'
        const wrapper = mount(MovieCard, {
          props: {
            original_title: expectedTitle,
          },
        })
        expect(wrapper.find('h3').text()).toContain(expectedTitle)
      })
    })

    describe('release_date', () => {
      it('pタグに、正しく値が渡っていること', () => {
        const expectedDate = 'expectedDate'
        const wrapper = mount(MovieCard, {
          props: {
            release_date: expectedDate,
          },
        })
        expect(wrapper.find('p').text()).toContain(expectedDate)
      })
    })
  })

  describe('Event', () => {
    it('画像のリンクをクリックした時、click:linkイベントが1度実行されること', async () => {
      const wrapper = mount(MovieCard)
      await wrapper.find("[data-test-id='img-link']").trigger('click')
      expect(wrapper.emitted('click:link')).toHaveLength(1)
    })
    it('タイトルのリンクをクリックした時、click:linkイベントが1度実行されること', async () => {
      const wrapper = mount(MovieCard)
      await wrapper.find("[data-test-id='title-link']").trigger('click')
      expect(wrapper.emitted('click:link')).toHaveLength(1)
    })
  })
})
