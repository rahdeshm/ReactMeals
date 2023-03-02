import React from "react";
import {StyledDiv} from './CardStyle'
const Card=(props)=>{

    return(
        <StyledDiv>
          {props.children}
        </StyledDiv>
    )
}

export default Card