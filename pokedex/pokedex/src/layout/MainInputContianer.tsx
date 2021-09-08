import React from "react";
import LittleLight from "../components/LittleLight";

const displayStyles={
    width:'50%',
    height:'100%',
}

const inputScreenDims = {
    width:'60%',
    height:'15vh',
    backgroundColor:'#59585A',
    borderRadius:'1vw',
    border:'0.25vw solid black',
    boxShadow:'inset 0 0 1rem black',
    marginBottom:'1vw'
}

const buttonWidth = {
    width:'60%',
    minHeight:'30vh',
    marginBottom:'1vw'

}

const inputButtonWidth = {
    width:'60%',
    minHeight:'23vh',
}

const buttons = {
    backgroundColor:'#86BDFF',
    width:'12.5%',
    height:'20%',
    border:'.25vw solid black',
    borderRadius:'.5vw',
}

const greyBar ={
    width:'5vw',
    border:'.25vw solid black',
    backgroundColor:'#59585A',
    height:'1.5vh',
    marginLeft:'1vw'
}

const lightGreyBar ={
    width:'4vw',
    border:'.25vw solid black',
    backgroundColor:'#FFFFFF',
    height:'4vw',
    borderRadius:'.75vw'
}

const bigGreyBar ={
    width:'45%',
    border:'.25vw solid black',
    backgroundColor:'#59585A',
    height:'4.5vw',
    borderRadius:'.75vw'

}

const MainInputContainer:React.FC = () => {

    const keyArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','enter','backspace','space','clear']

    let keyInd = 0;

    return(
        <section style={displayStyles}>
            <div style={inputScreenDims} className='input_screen'></div>
            <div style={buttonWidth} className='key_container'>
                {keyArr.map(item=><button style={buttons} key={keyInd+=keyInd} className={`letter ${item}`}>{item.toUpperCase()}</button>)}
            </div>
            <div className='light_container' style={inputButtonWidth}>
                <div style={{width:'100%',marginBottom:'1vw'}}>
                    <div>
                        <LittleLight color='red'/>
                        <LittleLight color='red'/>
                    </div>
                    <div>
                        <div style={greyBar}></div>
                        <div style={greyBar}></div>
                    </div>
                </div>
                <div style={{width:'100%',marginBottom:'1vw'}}>
                    <div>
                        <div style={lightGreyBar}></div>
                        <div style={lightGreyBar}></div>
                    </div>
                    <div>
                        <LittleLight color='yellow'/>
                    </div>
                </div>
                <div style={{width:'100%',marginBottom:'2vw'}}>
                    <div style={bigGreyBar}></div>
                    <div style={bigGreyBar}></div>
                </div>
            </div>
        </section>
    )
} 

export default MainInputContainer;