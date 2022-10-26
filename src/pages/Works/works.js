import React from "react"
 import styled from  "styled-components"
 import finn  from "../../Imagem/Finn.png"
 import Portflow from "../../Imagem/Portflow.png"
 import cosmetico from "../../Imagem/cosmetico.png"
 import Onu from "../../Imagem/Onu.png"

const H1= styled.h1`
font-family: 'Pacifico', cursive;
color:white;
margin-bottom:1rem;
`
const Div= styled.div`
width: 100%;
display:flex;
flex-direction: column;
align-items: center;
row-gap: 1rem;

img{
    width:50%;
}
@media screen and (max-width:600px) {
    img{
        width:100%;  
    }
}
`




export default function Works(){
    return(
        <div>
           
            <H1>Works</H1>
            <Div>
            <img src={Onu} alt= "Onu"/>
                <a href="https://onu-campo-limpo.netlify.app/" target= "_blank" rel="noreferrer"><button>Open</button></a>
                <img src={finn} alt= "Finn"/>
                <a href="https://beatrizsanto.github.io/Finn/" target= "_blank" rel="noreferrer"><button>Open</button></a>
                <img src={Portflow} alt= "Portflow"/>
                <a href="https://beatrizsanto.github.io/PORTFLOW/" target= "_blank" rel="noreferrer"><button>Open</button></a>
                <img src={cosmetico} alt= "Cosmetico"/>
                <a href="https://beatrizsanto.github.io/Landpage/" target= "_blank" rel="noreferrer"><button>Open</button></a> 
         </Div>
    </div>
    )
}