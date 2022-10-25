import React,{useState} from "react"

import styled from  "styled-components"



const H1= styled.h1`

font-family: 'Pacifico', cursive;
color:white;
`





export default function Works(){
const [isModalVisible, setIsModalVisible] = useState(false);
    return(
        <div>
            
            <H1>Works</H1>
            <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
    </div>
            

        </div>
    )
}