// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import SearchBar from "@/components/SearchBar";

test('Search Bar', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(SearchBar)
    //TODO: make test to check getBooks function

    // Assert the rendered text of the component
    expect(wrapper.get('input'))
})