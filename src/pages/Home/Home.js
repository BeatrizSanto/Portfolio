import React from "react"
import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div>
            <h1>Bem- vindo ao meu Site </h1>
            <Link to="/about">About</Link>
            <Link to = "/works">Works</Link>
            <Link to = "/">Home</Link>

        </div>
    )
}