//Function to get books list from api using fetch


const getBooks = async (query) => {
    let books = {};
    console.log(query);
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`).then(response => {
        return response.json()
    }).then(data => {
        books = data;
    });
    return books;
}

export default getBooks;