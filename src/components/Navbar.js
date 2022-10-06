import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div>
            <nav className='navbar'>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        LibraryBooks

                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home

                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/books"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Books
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/add"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                AddBook
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/login"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar