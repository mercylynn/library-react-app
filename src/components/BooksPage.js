import React, { useEffect, useState } from 'react'

import BooksList from './BooksList'
import AddBookForm from './AddBookForm';

function BooksPage() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/books')
            .then(resp => resp.json())
            .then(data => {
                setBooks(data)
            })
    }, [])


    const addBook = (book) => {
        setBooks([...books, book]);

    }
    return (
        <div>
            <AddBookForm addBook={addBook} />


            <BooksList books={books} setBooks={setBooks} />

        </div>
    );
}

export default BooksPage