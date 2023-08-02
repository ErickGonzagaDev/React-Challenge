// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import"./styles.css"

const Ball = ({positionX,positionY})=>{
    return(
    <div className="ball" style={{top: positionY, left: positionX}}>
    </div>
    )
}

export default Ball