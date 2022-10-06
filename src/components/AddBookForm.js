import React, { useState } from 'react'


function AddBookForm({ addBook }) {
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        image: "",
        year: "",
        category: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://books-json-server-heroku.herokuapp.com/books', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => addBook(data))

    }

    function handleClick() {
        alert("Book successfully added")
    }


    return (
        <div className='formcontainer'>
            <h1>New Book</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className='form-item'>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Author:
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Image:
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Year:
                        <input
                            type="number"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Category:
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <button type="submit" className='submit-button' onClick={handleClick}>Add Book</button>
            </form>
        </div>
    )
}

export default AddBookForm;