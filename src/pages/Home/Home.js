import React from "react"

import Header from "../../Header/Header"
import styled from  "styled-components"
import Perfildois from "../../Imagem/Perfildois.png"

const H1= styled.h1`

text-align: center;
font-family: 'Pacifico', cursive;
color:white;
`

const Container = styled.div`

display:flex;
flex-direction:column;
align-items: center;
justify-content: center;

figure{
    width:30%;
}
img{
    width:30vw;
    height:30 vh;
    margin-top: 10rem;
}

@media screen and (max-width:768px){

   figure{
    width:100%;
   }

   img{
    width: 100%;
    margin-top:5rem;
   }
}
`





export default function Home(){
    return(
        <Container>
           
            <div>
            <H1>Bem- vindo ao meu Site </H1>
            </div>
        <figure>
            <img src={Perfildois} alt ="Perfil dois"/>
        </figure>
           

        </Container>



    )
}