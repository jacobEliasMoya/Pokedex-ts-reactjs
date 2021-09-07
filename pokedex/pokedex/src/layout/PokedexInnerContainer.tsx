import React from "react";
import DisplayContainer from "./DisplayContainer";

const containerStyles = {
    width:'100%',
    height:'100%',
    paddingTop:'17vh'

}

const tempWidth = {
    width:'50%'
}

const PokedexInnerContainer:React.FC = () => {
    return (
        <main className='main_inner_container' style={containerStyles}>
            <DisplayContainer/>
            <section style={tempWidth}></section>
        </main>
    )
}

export default PokedexInnerContainer;