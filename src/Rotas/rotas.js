import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home"
import Works from "../pages/Works/works";
import Header from "../Header/Header";



export default function Rotas () {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/works" element={<Works/>}/>
            </Routes>
        </Router>
    )
}