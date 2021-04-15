import {mount} from "@vue/test-utils";
import BookList from "@/components/BookList";
import books from '../variables/books';

test("BookList", () => {
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