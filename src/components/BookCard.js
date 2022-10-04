import React from 'react'

function BookCard({ book }) {
  console.log(book);
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
          >
            x
          </button>
        </div>
      </div>

    </div>
  )
}

export default BookCard