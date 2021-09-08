import React from "react";
import MainInputContainer from "./MainInputContianer";

const swapButton ={
    width:'5vw',
    height:'5vw',
    borderRadius:'50%',
    backgroundColor:'#59585A',
    border:'.25vw solid black'
}
const fullWidth = {
    width:'80%',
}
const partialWidth = {
    width:'20%',
    height:'5vw',

}
const midWidth = {
    width:'80%',
}
const thinRed ={
    width:'40%',
    backgroundColor:'#FF0001',
    borderRadius:'1vw',
    border:'.25vw solid black',
    padding:'.1vw',
    marginBottom:'2vw',
    boxShadow:' 0 0 1rem #FF0001'

}

const thinGreen ={
    width:'40%',
    backgroundColor:'#86BDFF',
    borderRadius:'1vw',
    border:'.25vw solid black',
    padding:'.1vw',
    marginBottom:'2vw',
    boxShadow:' 0 0 1rem #86BDFF'

}

const bigGreen ={
    width:'86%',
    height:'15vh',
    backgroundColor:'#33CB67',
    borderRadius:'1vw',
    border:'.25vw solid black',
    padding:'.1vw',
    boxShadow:'inset 0 0 1rem black'

}

const buttonHorz ={
    width:'5vw',
    height:'2vw',
    backgroundColor:'#59585A'
}

const buttonVert ={
    width:'2vw',
    height:'5vw',
    backgroundColor:'#59585A',
}

const buttonDimsHor = {
    width:'34%',
    height:'100%',
    backgroundColor:'#59585A',
    borderBottom:'.25vw solid black',
    borderTop:'.25vw solid black',
    borderLeft:'none',
    borderRight:'.25vw solid black',

}
const buttonDimsHor2 = {
    width:'34%',
    height:'100%',
    backgroundColor:'#59585A',
    borderBottom:'.25vw solid black',
    borderTop:'.25vw solid black',
    borderLeft:'.25vw solid black',
    borderRight:'none'

}
const buttonDimsVert = {
    width:'100%',
    height:'34%',
    backgroundColor:'#59585A',
    borderBottom:'none',
    borderTop:'.25vw solid black',
    borderLeft:'.25vw solid black',
    borderRight:'.25vw solid black'

}
const buttonDimsVert2 = {
    width:'100%',
    height:'34%',
    backgroundColor:'#59585A',
    borderTop:'none',
    borderBottom:'.25vw solid black',
    borderLeft:'.25vw solid black',
    borderRight:'.25vw solid black'
}

const innerCircle ={
    height:'1vw',
    width:'1vw',
    borderRadius:'50%',
    border:'.2vw solid black'
}

const DisplayNavigation:React.FC = () => {
    return(
        <div style={fullWidth} className='display_navigation'>
            <div style={partialWidth}>
                <div style={swapButton} className='swap_button'></div>
            </div>
            <div className='display_button_area' style={midWidth}>
                <div style={thinRed} className='thin_red'></div>
                <div style={thinGreen } className='thin_lightblue'></div>
                <div style={bigGreen } className='power_text_display'></div>
            </div>
            <div className='display_dpad' style={partialWidth}>
                <div style={buttonHorz} className='button_horizontal'>
                    <button style={buttonDimsHor2}></button>
                    <button style={buttonDimsHor}></button>
                </div>
                <div style={buttonVert} className='button_vertical'>
                    <button style={buttonDimsVert}></button>
                    <button style={buttonDimsVert2}></button>
                </div>
                <div className='inner_circle' style={innerCircle}></div>

            </div>
        </div>
    )
}

export default DisplayNavigation;