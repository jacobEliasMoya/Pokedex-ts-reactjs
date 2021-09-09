import React from "react";

const outerColor = {
    border:'.2vw solid black',
    backgroundColor:'white',
    width:'7vw',
    height:'7vw',
    borderRadius:'50%',
    transform:'translate(0%,15%)',
    boxShadow:' 0 0 1rem #3398CD',
    marginRight:'.5vw'
}

const innerColor = {
    width:'90%',
    height:'90%',
    backgroundColor:'#3398CD',
    borderRadius:'50%',

}

const innerShine = {
    backgroundColor:'white',
    opacity:.3,
    borderRadius:'50%',
    width:'20%',
    height:'20%',
    transform:'translate(-100%,-100%)'
}


const BigLight:React.FC = () => {
    return (
        <div style={outerColor} className='biglight'>
            <div style={innerColor}>
                <div style={innerShine}>

                </div>
            </div>
        </div>
    )
}

export default BigLight;