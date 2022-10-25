import React from "react";
import {Link}  from "react-router-dom"
import styled from "styled-components";


const NavBar = styled.nav`
display:flex;
 justify-content: space-between;
 width: 60%;
 margin:0 auto;
`
const Anchor = styled(Link) `
 color:white;
 text-decoration: none;
`






export default function Header(){
    return(
        <NavBar>
            <p><Anchor to="/">Home</Anchor></p>
            <p><Anchor to = "/about">About</Anchor></p>
            <p><Anchor to = "/works">Works</Anchor></p>
          
            
       </NavBar>
       
    )

}