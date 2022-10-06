import React from 'react'

function BookCard({ book, deleteBook }) {
  const { name, author, year, image } = book
  //delete request
  function handleDelete() {
    fetch(`https://books-json-server-heroku.herokuapp.com/books/${book.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => deleteBook(book))
  }


  return (
    <div className='container'>
      <div className='card'>
        <div className='image'>
          <img alt='bookimage' src={image} />
        </div>
        <div className='content'>
          <h2>{name}</h2>
          <p>{author}</p>
          <p>{year}</p>
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