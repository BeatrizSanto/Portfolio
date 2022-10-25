import React from "react"
<<<<<<< HEAD
import Perfil from "../../Imagem/Perfil.png"
import styled from  "styled-components"
import linkedin from "../../Imagem/footer_01.png"
import github from "../../Imagem/footer_02.png"

const H1= styled.h1`
font-family: 'Pacifico', cursive;
color:white;
`

const Section = styled.section`
display:flex;
align-items: center;
justify-content: start;
width:100%;
min-height:80vh;

div{
    display:flex;
    align-items: center;
    flex-direction: column;
    width:50%;  
}
p{
    color:black;
    width:70%;
    font-size: 1.2rem;
    margin-top: 5rem;  
}
img{
    width:30%;
}

@media screen and (max-width:768px) {
    flex-direction:column;
    padding:1rem 0.5rem;

    div{
        width:100%;
    }
    p{
        width: 100%;
        text-align: center;
        margin-top:1rem;
    }
    img{
        margin-bottom: 1rem;
        width:50%;
    }
}
`

const Div= styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    gap:3rem;
    img{
        width:50px;
    }
`



export default function About(){
    return(
        
            <>
            <main>

            <Section>
                <img src ={Perfil} alt ="Perfil"/>
            <div>
                <H1> Sobre mim</H1>
                <p> Sou profissional da área de Design gráfico em migração  para área de front end, acredito que minha experiência no Vai na Web 
                com projetos do começo ao fim, sob pressão de prazos, possa ter  ajudado aperfeiçoar e  adquirir conhecimento na área de front. 
                   A procurar de novos  desafios no mercado de  trabalho na área front para   ampliar meu conhecimento e  experiência.
                   Sou uma profissional dedicada, organizada, que se esforça diariamente em prol dos objetivos da empresa e da minha profissão. 
                   Adoro desafios e estou pronta para realizar com sucesso todos os objetivos que me forem propostos.</p>
            </div>
            </Section>
            <Div>
                <a href="https://www.linkedin.com/in/beatriz--santos/" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/BeatrizSanto" target="_blank">
                    <img src={github} alt="github"/>
                </a>
            </Div>
            </main>
            </>
            
    )
}
=======
import {Link}  from "react-router-dom"
export default function About(){
    return(
        <div>
            <h1>About</h1>
            <Link to="/about">About</Link>
            <Link to = "/works">Works</Link>
            <Link to = "/">Home</Link>

        </div>
    )
}
>>>>>>> 10ba6dc9c6fb15f9e5ea0d7fa6fb6db8a8fdb4d4
