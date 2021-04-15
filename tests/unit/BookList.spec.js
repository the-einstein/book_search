import {mount} from "@vue/test-utils";
import BookList from "@/components/BookList";

test("BookList", () => {
    //TODO:refactor code, get books variable to data file
    const books = {
        items: [
            {
                volumeInfo: {
                    title: 'smthng',
                    authors: [],
                    imageLinks: {
                        smallThumbnail: 'url'
                    }
                }
            }
        ]
    }

    const wrapper = mount(BookList, {
        propsData: {
            books: books
        }
    });

    expect(wrapper.get('#table'))

    expect(wrapper.get('#thumbnail'))

    expect(wrapper.get('#title'))

    expect(wrapper.get('#author'))

    expect(wrapper.get('#action'))

})