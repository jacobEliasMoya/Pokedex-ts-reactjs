import React from "react";

interface iconProps {
    faname:string
}

const FaIcon:React.FC<iconProps> = ({faname}) => {
    return(
        <i className={faname}></i>
    )
}

export default FaIcon;