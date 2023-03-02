import styled,{keyframes} from "styled-components";

const ModalAnimation= keyframes`
from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const ModalElement=styled.div`
position: fixed;
top: 15vh;
left: 17%;
width: 70%;
background-color: white;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;
animation:${ModalAnimation} 900ms ease-out forwards;
margin-bottom:50px;
max-height:600px;
overflow:scroll
`

const BackdropElement=styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
    `


export {ModalElement,BackdropElement}

