import React from 'react'
import Bookcard from './BookCard'

function BooksList({ books }) {
    return (
        <div>
            {books.map((book) => {
                return (
                    <div>
                        <Bookcard key={book.id} book={book} />
                    </div>
                );
            })

            }

        </div>
    )
}

export default BooksList