// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import Book from "@/pages/Book";
import books from '../variables/books';

test('Book page', () => {
    //TODO:refactor code, get books variable to data file
    const book =books.items[0]
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(Book, {
        propsData: {
            book: book
        }
    })
    //title, author, description, thumbnail.
    // Assert the rendered text of the component
    expect(wrapper.get('#authors'))

    expect(wrapper.get('#description'))

    expect(wrapper.get('#title'))

    expect(wrapper.get('#thumbnail'))

})