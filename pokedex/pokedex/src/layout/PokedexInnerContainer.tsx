import React from "react";
import DisplayContainer from "./DisplayContainer";
import MainInputContainer from "./MainInputContianer";

const containerStyles = {
    width:'100%',
    height:'100%',
    paddingTop:'15vh'
}

    
const PokedexInnerContainer:React.FC = () => {
    return (
        <main className='main_inner_container' style={containerStyles}>
            <DisplayContainer/>
            <MainInputContainer/>
        </main>
    )
}

export default PokedexInnerContainer;