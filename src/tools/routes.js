import Home from "@/pages/Home";
import Book from "@/pages/Book";

const routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "/bookInfo",
        name: 'bookInfo',
        props: true,
        meta: {title: 'Book info'},
        component: Book
    }
]

export default routes;