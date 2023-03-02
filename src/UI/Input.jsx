import { StyledLabel,StyledInput } from "./InputStyles";
import React  from "react";
const Input=React.forwardRef((props,ref)=>{
    console.log({...props.input});
    return(
       <div>
         <StyledLabel htmlFor={props.input.id} >{props.label}</StyledLabel>
         <StyledInput ref={ref} id={props.input.id} {...props.input}></StyledInput>
       </div>
    )
})

export default Input