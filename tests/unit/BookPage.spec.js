// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import Book from "@/pages/Book";


test('Book page', () => {
    const book =
            {
                volumeInfo: {
                    title: 'smthng',
                    authors: [],
                    imageLinks: {
                        smallThumbnail: 'url'
                    }
                },
                searchInfo: {
                    textSnippet: 'Book desctiption'
                }
            }
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