import { useContext } from 'react';
import './CartItemsModuls.css';
import CartContext from '../Store/Cart-Context';



const CartItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx=useContext(CartContext);
  console.log(props,'cartitems');
   const addItemToCart=(props)=>(
    cartCtx.addItem(props)
   ) 
   const removeItemToCart=(id)=>{
    cartCtx.removeItem(id)
   }

  return (
    <li className="cart-item" >
      <div className='parent'>
      <div>
        <h2>{props.name}</h2>
        <div className="summary">
          <span className='price'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
      </div>  
    </li>
  );
};

export default CartItems;
