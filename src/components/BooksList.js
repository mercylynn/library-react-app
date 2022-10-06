
import React, { useState } from 'react'
import Bookcard from './BookCard'
import Search from './Search'


function BooksList({ books, setBooks }) {
    const [category, setCategory] = useState("All")
    const [search, setSearch] = useState("")
    //delete book
    function deleteBook(deletedBook) {
        setBooks(books.filter((book) => {
            return book.id !== deletedBook.id
        }))

    }


    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }
    function handleSearchChange(e) {
        setSearch(e.target.value)
    }
    const booksToDisplay = books
        // category
        .filter(
            (book) => category === "All" || book.category === `${category}`
        )
        // search term
        .filter((book) => book.name.toLowerCase().includes(search.toLowerCase()));

    const displayBooks = booksToDisplay.map((eventObj) => {
        return <Bookcard key={eventObj.id} book={eventObj} deleteBook={deleteBook} />
    })
    //Render books in rows of 4
    //Mutates displayEvents into arrays of groups of 4
    function renderBooks() {
        let books = []
        let size = 4

        for (let i = 0; i < displayBooks.length; i += size) {
            books.push(displayBooks.slice(i, i + size))
        }
        const renderBooks = books.map((booksRow) => {
            return <div className='books'>{booksRow}</div>
        })

        return renderBooks
    }
    return (
        <div>

            <Search search={search} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
            <div>{renderBooks()}</div>


        </div>
    )
}

export default BooksList