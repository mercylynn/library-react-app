import React, { useEffect, useState } from 'react'
import Search from './Search';
import BooksList from './BooksList'

function BooksPage() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then(resp => resp.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    return (
        <div>BooksPage


            <BooksList books={books} />

        </div>
    );
}

export default BooksPage