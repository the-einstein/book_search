// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import Home from '../../src/pages/Home'

// The component to test
// const MessageComponent = {
//     template: '<p>{{ msg }}</p>',
//     props: ['msg']
// }

// eslint-disable-next-line no-undef
test('displays message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(Home, {
        propsData: {
            msg: 'Hello world'
        }
    })

    // Assert the rendered text of the component
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toContain('Hello world')
})