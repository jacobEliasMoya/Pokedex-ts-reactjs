import React from "react";
import defaultPika from '../images/test_pika.png';
import LittleLight from "../components/LittleLight";
import DisplayNavigation from "./DisplayNavigation";

const displayStyles={
    width:'50%',
    height:'100%',
}

const outerImageContStyles = {
    borderRadius:'1vw',
    backgroundColor:'white',
    border:'.25vw solid black',
    width:'80%',
    height:'55%',
    marginBottom:'2vw'
}

const innerImageContStyles = {
    borderRadius:'1vw',
    backgroundColor:'#99CB9A',
    border:'.25vw solid black',
    width:'85%',
    height:'70%',
    overflow:'hidden'
}

const innerImage = {
    height:'140%',
    width:'90%'
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

const DisplayContainer:React.FC = () => {
    return(
        <section style={displayStyles}>
            <div style={outerImageContStyles} className='outer_image_container'>
                <div className='light_container'><LittleLight color='red'/><LittleLight color='red'/></div>
                <div style={innerImageContStyles} className='inner_image_container'>
                    <img src={defaultPika} style={innerImage} alt="default_pikachu" />
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