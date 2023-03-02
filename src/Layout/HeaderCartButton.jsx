import React,{useContext}from 'react'
import CartIcon from '../Cart/CartIcon'
import {StyledButton} from './HeaderCartButtonStyle';

import CartContext from '../Store/Cart-Context';

const HeaderCartButton = (props) => {

   
   const cartCtx= useContext(CartContext);

   const numberOfCartItems=cartCtx.items.reduce((carNumber,item)=>{
    return carNumber+item.amount
   },0);
   
  return (
   
    <StyledButton onClick={props.onClick}>
        <span className='icon'><CartIcon/></span>
        <span className='name'>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
    </StyledButton>
  )
}

export default HeaderCartButton