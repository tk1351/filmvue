import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import InputForm from './index.vue'

describe('Testing InputForm Component', () => {
  it('InputFormコンポーネントが正しく表示されること', () => {
    const wrapper = mount(InputForm)
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('Props', () => {
    describe('initialValue', () => {
      it('inputタグのvalue属性に、正しく値が渡っていること', () => {
        const expectedValue = 'expectedValue'
        const wrapper = mount(InputForm, {
          props: {
            initialValue: expectedValue,
          },
        })
        expect(wrapper.find('input').element.value).toBe(expectedValue)
      })
    })

    describe('placeholder', () => {
      it('inputタグのplaceholder属性に、正しく値が渡っていること', () => {
        const expectedPlaceholder = 'expectedPlaceholder'
        const wrapper = mount(InputForm, {
          props: {
            placeholder: expectedPlaceholder,
          },
        })
        expect(wrapper.find('input').attributes('placeholder')).toBe(
          expectedPlaceholder
        )
      })
    })

    describe('Event', () => {
      it('inputへ値を入力した際に、update:modelValueイベントが実行されること', async () => {
        const wrapper = mount(InputForm)
        await wrapper.find('input').setValue('test')
        expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
      })
    })
  })
})
