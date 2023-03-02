import styled,{keyframes} from "styled-components";
const buttonAnimation=keyframes`
        0% {
          transform: scale(1);
        }
        10% {
            background-color:'red;'
          transform: scale(0.9);
        }
        30% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(1.15);
        }
        100% {
          transform: scale(1);
        }
      }`

const StyledButton=styled.button`
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: #4d1601;
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;
    margin-right:100px;   
    animation-name:${buttonAnimation};
    animation-duration:2s;
    animation-iteration:infinite;

    &:hover{
        background-color: 'red';
      };

    & .icon{
    //   display:block;
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
    }
    & .badge{
        // display:block;
        color:'red';
        
        
    }
    & .name{
        // display:block;
        margin-left:15px;
        margin-right:25px;
        // color:blue;
       
    }

    &:hover,:active{
        background-color: #92320c;
    } 



`


export {StyledButton}
// .button {
//     cursor: pointer;
//     font: inherit;
//     border: none;
//     background-color: #4d1601;
//     color: white;
//     padding: 0.75rem 3rem;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     border-radius: 25px;
//     font-weight: bold;
//   }
  
//   .button:hover,
//   .button:active {
//     background-color: #2c0d00;
//   }
  
//   .icon {
//     width: 1.35rem;
//     height: 1.35rem;
//     margin-right: 0.5rem;
//   }
  
//   .badge {
//     background-color: #b94517;
//     padding: 0.25rem 1rem;
//     border-radius: 25px;
//     margin-left: 1rem;
//     font-weight: bold;
//   }
  
//   .button:hover .badge,
//   .button:active .badge {
//     background-color: #92320c;
//   }
  
//   .bump {
//     animation: bump 300ms ease-out;
//   }
  
//   @keyframes bump {
//     0% {
//       transform: scale(1);
//     }
//     10% {
//       transform: scale(0.9);
//     }
//     30% {
//       transform: scale(1.1);
//     }
//     50% {
//       transform: scale(1.15);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }