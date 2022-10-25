import React from "react"
import {Link} from "react-router-dom"

export default function Works(){
    return(
        <div>
            <h1>Works</h1>
            <Link to="/about">About</Link>
            <Link to = "/works">Works</Link>
            <Link to = "/">Home</Link>

        </div>
    )
}