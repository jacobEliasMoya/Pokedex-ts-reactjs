import React, { ReactNode, useEffect } from "react";
import LittleLight from "../components/LittleLight";
import FaIcon from "../components/FaIcon";
import { useAppSelector } from "../app/hooks";

const displayStyles={
    width:'50%',
    height:'100%',
}

const pokeA = {
    width:'100%',
    padding:'1rem'
}

const inputScreenDims = {
    width:'60%',
    height:'15vh',
    backgroundColor:'#59585A',
    borderRadius:'1vw',
    border:'0.25vw solid black',
    boxShadow:'inset 0 0 1rem black',
    marginBottom:'1vw',
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
    fontSize:'1vw'
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
    let pokemon = useAppSelector(state=>state.pokeImporter[0])
    let isAppOn = useAppSelector(state=>state.appOnReducer.appOn)
    let keyInd = 0;

    return(
        <section style={displayStyles}>
            {pokemon ? ( <div style={inputScreenDims} className='input_screen'>{pokemon.results.map(item=>{return <a style={pokeA} href={`${item.url}`}>{item.name}</a>})}</div>) :  <div style={inputScreenDims} className='input_screen'></div>}

            <div style={buttonWidth} className='key_container'>
                {keyArr.map(item=><button style={buttons} key={keyInd=keyInd+1} className={`letter ${item}`}>{item.toUpperCase()}</button>)}
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
                <div className='yellow_light_container' style={{width:'100%',marginBottom:'1vw'}}>
                    <div>
                        <div style={lightGreyBar}></div>
                        <div style={lightGreyBar}></div>
                    </div>
                    <div>
                        <LittleLight color='yellow'/>
                    </div>
                </div>
                <div className='button_navigation' style={{width:'100%',marginBottom:'2vw'}}>
                    <div className='up' style={bigGreyBar}><FaIcon faname='fas fa-caret-up'/></div>
                    <div className='down' style={bigGreyBar}><FaIcon faname='fas fa-caret-down'/></div>
                </div>
            </div>
        </section>
    )
} 

export default MainInputContainer;