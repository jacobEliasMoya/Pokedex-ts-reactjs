import React from "react";
import BigLight from "../components/BigLIght";
import LittleLight from "../components/LittleLight";

const navBackground = {
    backgroundColor: '#FF0066',
    width:'100%',
    maxHeight:'10vh',
}

const TopPokedex:React.FC = () => {
    return(
        <nav style={navBackground} >
            <BigLight/>
            <LittleLight color='red'/>
            <LittleLight color='green'/>
            <LittleLight color='yellow'/>
            {/* items that will be styles usgin scss*/}
            <div className='rotated_top'></div>
            <div className='straight_top'></div>
        </nav>
    )
}

export default TopPokedex;