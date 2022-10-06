import React from 'react'


function Search({ onCategoryChange, onSearchChange, search }) {
    return (
        <div className='filter'>
            <input className='search' type='text' name='search' placeholder='Search by name' value={search} onChange={onSearchChange} />
            <select name='sort' onChange={onCategoryChange}>
                <option value='All'>All</option>
                <option value='ruby'>Ruby</option>
                <option value='javascript'>Javascript</option>
                <option value='html'>HTML</option>
                <option value='python'>Python</option>
                <option value='react'>React</option>
                <option value='ui'>ui</option>
            </select>
        </div>
    )
}

export default Search