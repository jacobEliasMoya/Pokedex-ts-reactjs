import React from "react";

const outerColorRed = {
    border:'.2vw solid black',
    backgroundColor:'red',
    width:'2.5vw',
    height:'2.5vw',
    borderRadius:'50%',
    transform:'translate(0%,50%)',
    marginRight:'.75vw',
    boxShadow:' 0 0 1rem red'

}
const outerColorGreen = {
    border:'.2vw solid black',
    backgroundColor:'green',
    width:'2.5vw',
    height:'2.5vw',
    borderRadius:'50%',
    transform:'translate(0%,50%)',
    marginRight:'.75vw',
    boxShadow:' 0 0 1rem green'

}
const outerColorYellow = {
    border:'.2vw solid black',
    backgroundColor:'#FFCB67',
    width:'2.5vw',
    height:'2.5vw',
    borderRadius:'50%',
    transform:'translate(0%,50%)',
    marginRight:'.75vw',
    boxShadow:' 0 0 1rem #FFCB67'

}
const innerShine = {
    backgroundColor:'white',
    opacity:.6,
    borderRadius:'50%',
    width:'30%',
    height:'30%',
    transform:'translate(-60%,-60%)'
}

interface colorAs {
    color:string
}

const LittleLight:React.FC<colorAs> = (color) => {


    const assignColor = (item:string) => {
        switch(item){
            case 'red':
                return outerColorRed;
            case 'green':
                return outerColorGreen;
            case 'yellow':
                return outerColorYellow
        }
    }

    return (
        <div style={assignColor(color['color'])} className='little_light'>
            <div className='inner_shine' style={innerShine}>
            </div>
        </div>
    )
}

export default LittleLight;