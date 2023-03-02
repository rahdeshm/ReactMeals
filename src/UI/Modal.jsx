import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '../Cart/Cart';
import { ModalElement,BackdropElement} from './ModuleStyle';
const Backdrop=props=>{
   
    return <BackdropElement onClick={props.onClick}>

    </BackdropElement>
}
const ModalOverlay=props=>{
    
    return(
        <ModalElement> 
            {props.children}
        </ModalElement>
    ) 
}

const portalElement=document.getElementById('overlays');
const Modal = (props) => {

  return (
   <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
   </>
  )
}

export default Modal