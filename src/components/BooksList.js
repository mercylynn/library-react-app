import { functions } from 'lodash'
import React from 'react'
import Bookcard from './BookCard'

function BooksList({ books, setBooks }) {
    function deleteBook(deletedBook) {
        setBooks(books.filter((book) => {
            return book.id !== deletedBook.id
        }))

    }
    return (
        <div>
            {books.map((book) => {
                return (
                    <div>
                        <Bookcard key={book.id} book={book} deleteBook={deleteBook} />
                    </div>
                );
            })

            }

        </div>
    )
}

export default BooksList