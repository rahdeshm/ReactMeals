import styled from "styled-components";

 
  

const Head=styled.header`
height:70px;
background-color: #8a2b06;
padding:10px;
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
top:0;
left:0;
z-index:100;
width:100%;

.logo{
// height:30px;
margin-left:115px;
align-self:center;
color:white;
}
    // button{
    //     display:block;
    //     margin-right:115px;
    // }
`
const Image=styled.div`
width:100%;

img{
    width:100%;
    object-fit:cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
    // transform: rotateZ(-3deg) translateY(-5rem) translateX(-1rem);
}
`

export {Head,Image}