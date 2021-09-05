import React from "react";

const navBackground = {
    backgroundColor: '#FF0066',
    width:'100%',
    minHeight:'10vh',
}

const TopPokedex:React.FC = () => {
    return(
        <nav style={navBackground} >
            <div className='rotated_top'></div>
            <div className='straight_top'></div>
        </nav>
    )
}

export default TopPokedex;