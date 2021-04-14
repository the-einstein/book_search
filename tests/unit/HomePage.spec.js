// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import Home from '../../src/pages/Home'

test('displays message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(Home, {
        propsData: {
            msg: 'Hello world'
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
})