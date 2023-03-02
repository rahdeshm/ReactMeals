import React, { useContext } from 'react'
import MealItemForm from './MealItemForm';
import {MealItemDiv} from './MealItemStyle';
import CartContext from '../../Store/Cart-Context';
const MealItem = (props) => {
    const price=`$${props.price.toFixed(2)}` ;
    const cartCtx=useContext(CartContext);
    console.log(cartCtx);
    const addToCartHandler=amount=>{
        cartCtx.addItem({
          id:props.id,
          name:props.name,
          amount:amount,
          price:props.price
        });
    }
    const removeToCartHandler=id=>{
      cartCtx.removeItem(id)
    }
  return (
    <li >
      <MealItemDiv>
        <div className='mealDetails'>
         <h3>{props.name}</h3>
         <div className='description'>{props.description}</div>
         <div className='price'>{price}</div>
         </div>
         <MealItemForm onAddToCart={addToCartHandler} onRemoveToCart={removeToCartHandler}/>
      </MealItemDiv>
      
    </li>
  )
}

export default MealItem