import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import BooksPage from "./BooksPage"
import Navbar from "./Navbar";
import About from "./pages/About"
import AddBookForm from "./AddBookForm";
import Footer from "./Footer/Footer"
import Login from "./Login";
import Home from "./pages/Home"


function App() {
    useEffect(() => {
        document.title = 'library-books';
    });
    return (
        <div>


            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/books' element={<BooksPage />} />
                <Route path='/add' element={<AddBookForm />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />

        </div>
    )

}
export default App;