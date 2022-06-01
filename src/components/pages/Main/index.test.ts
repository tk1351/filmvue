import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Main from './index.vue'

const dummyMovies = [
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title2',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title3',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title4',
    release_date: '2022/01/01',
  },
  {
    poster_path:
      'https://images.unsplash.com/photo-1654035110077-1d249f756ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    original_title: 'Movie Title5',
    release_date: '2022/01/01',
  },
]

const wrapperFactory = () => {
  return mount(Main, {
    props: {
      movies: dummyMovies,
    },
  })
}

describe('Testing Main Page', () => {
  describe('Props', () => {
    it('渡された映画の数だけリストが表示されていること', () => {
      const wrapper = wrapperFactory()
      expect(wrapper.findAll('li').length).toBe(5)
    })
  })

  describe('Event', () => {
    it('InputFormへ値を入力した際に、update:modelValueイベントが実行されること', async () => {
      const wrapper = wrapperFactory()
      await wrapper.find('input[type="text"]').setValue('test')
      expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    })

    it('MovieCardの画像をクリックした際に、click:linkイベントが実行されること', async () => {
      const wrapper = wrapperFactory()
      const image = wrapper.findAll("[data-test-id='img-link']")[0]
      await image.trigger('click')
      expect(wrapper.emitted('click:link')).toHaveLength(1)
    })

    it('MovieCardのタイトルをクリックした際に、click:linkイベントが実行されること', async () => {
      const wrapper = wrapperFactory()
      const image = wrapper.findAll("[data-test-id='title-link']")[0]
      await image.trigger('click')
      expect(wrapper.emitted('click:link')).toHaveLength(1)
    })
  })
})
