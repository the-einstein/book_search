// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import Home from '../../src/pages/Home'
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/BookList";

test('HomePage', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(Home);
    //TODO:make tests for functions
    expect(wrapper.find('#home').exists()).toBe(true);

    const searchBar = wrapper.findComponent(SearchBar);

    expect(searchBar.exists()).toBe(true);

    const bookList = wrapper.findComponent(BookList);

    expect(bookList.exists()).toBe(true)
})