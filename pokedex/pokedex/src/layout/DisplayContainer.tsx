import React, { useEffect, useState } from "react";
import defaultPika from '../images/test_pika.png';
import LittleLight from "../components/LittleLight";
import DisplayNavigation from "./DisplayNavigation";
import { useAppSelector } from "../app/hooks";

const displayStyles={
    width:'50%',
    height:'100%',
}

const outerImageContStyles = {
    borderRadius:'1vw',
    backgroundColor:'white',
    border:'.25vw solid black',
    width:'60%',
    height:'60%',
    marginBottom:'2vw'
}

const innerImageContStyles = {
    borderRadius:'1vw',
    backgroundColor:'#99CB9A',
    border:'.25vw solid black',
    width:'85%',
    height:'70%',
    overflow:'hidden',
    boxShadow:'inset 0 0 1rem black'
}

const innerImage = {
    height:'140%',
    width:'90%',
}

const fullWidth = {
    width:'100%'
}

const speakerDims ={
    width: '15%',
    height: '100%',
}

const speakerLines ={
    width:'80%',
    minHeight:'.35vw',
    backgroundColor:'black',
    transform:'none !important',
    borderRadius:'1vw'
}

const typeStyle = {
    padding:'.25vw',
    borderRadius:'.75rem',
    minWidth:'25%',
    marginTop:'.25vw',
    border:'.2vw solid black',
    color:'white',
    fontSize:'1vw',
    boxShadow:'0 0 .5vw black',
    textShadow:'0 0 .5vw black'
}

const DisplayContainer:React.FC = () => {
    
    const [imageSrc, setImageSrc] = useState<string>(defaultPika)

    const pokeStats = useAppSelector(state=>state.setPokemonStats[0]) 

    useEffect(()=>{
        pokeStats ? setImageSrc(pokeStats.sprites.front_default) : console.log();
    },[pokeStats])

    return(
        <section style={displayStyles}>
            <div style={outerImageContStyles} className='outer_image_container'>
                <div className='light_container'><LittleLight color='red'/><LittleLight color='red'/></div>
                <div style={innerImageContStyles} className='inner_image_container'>
                    <img src={imageSrc} style={innerImage} alt="default_pikachu" />
                    {pokeStats ? pokeStats.types.map(item=><div style={typeStyle} className={item.type.name}>{item.type.name.toUpperCase()}</div>) : '..'}
                </div>
                <div style={fullWidth} className='light_container apart'>
                    <LittleLight color='red'/>
                    <div style={speakerDims} className='speaker_section'>
                        <div style={speakerLines}></div>
                        <div style={speakerLines}></div>
                        <div style={speakerLines}></div>
                        <div style={speakerLines}></div>
                    </div>
                </div>
            </div>
            <DisplayNavigation/>
            
        </section>
    )
} 

export default DisplayContainer;