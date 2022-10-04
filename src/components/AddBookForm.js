import React, { useState } from 'react'


function AddBookForm({ addBook }) {
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        image: "",
        year: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3002/books', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => addBook(data))

    }


    return (
        <div>
            <h1>New Book</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}

                    />
                </label>
                <label>
                    Author:
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}

                    />
                </label>
                <label>
                    Image:
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}

                    />
                </label>
                <label>
                    Year:
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}

                    />
                </label>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddBookForm;