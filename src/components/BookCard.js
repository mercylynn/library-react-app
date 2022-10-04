import React from 'react'

function BookCard({ book, deleteBook }) {

  function handleDelete() {
    fetch(`http://localhost:3002/books/${book.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => deleteBook(book))
  }

  return (
    <div className='container'>
      <div className='card'>

        <div className='image'>
          <img alt='bookimage' src={book.image} />
        </div>
        <div className='content'>
          <h2>{book.name}</h2>
          <p>{book.author}</p>
          <p>{book.year}</p>
        </div>
        <div className="">
          <button
            className="deletebutton"
            onClick={handleDelete}
          >
            x
          </button>
        </div>
      </div>

    </div>
  )
}

export default BookCard