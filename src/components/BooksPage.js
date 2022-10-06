import React, { useEffect, useState } from 'react'

import BooksList from './BooksList'
import AddBookForm from './AddBookForm';

function BooksPage() {
    const [books, setBooks] = useState([])
    //fetch data from json-server
    useEffect(() => {
        fetch('https://books-json-server-heroku.herokuapp.com/books')
            .then(resp => resp.json())
            .then(data => {
                setBooks(data)
            })
    }, [])


    const addBook = (book) => {
        setBooks([...books, book]);

    }

    <AddBookForm addBook={addBook} />
    return (
        <div>
            <BooksList books={books} setBooks={setBooks} />
        </div>
    );
}

export default BooksPage