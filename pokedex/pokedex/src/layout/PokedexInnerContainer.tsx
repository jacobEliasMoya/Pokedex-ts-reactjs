import React from "react";
import DisplayContainer from "./DisplayContainer";
import MainInputContainer from "./MainInputContianer";

const containerStyles = {
    width:'100%',
    height:'100%',
    paddingTop:'15vh',
    boxShadow:'inset 0 3vw 5vw 1vw black'

}

const spacer = {
    width:'2vw',
    height:'100%',
    backgroundColor:'#FF0066',
    boxShadow:'0 0 5vw black'
}
    
const PokedexInnerContainer:React.FC = () => {
    return (
        <main className='main_inner_container' style={containerStyles}>
            <DisplayContainer/>
            <div className='spacer' style={spacer}></div>
            <MainInputContainer/>
        </main>
    )
}

export default PokedexInnerContainer;