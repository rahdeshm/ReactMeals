import { useContext } from "react";
import CartContext from "../Store/Cart-Context";
import Modal from "../UI/Modal";
import { StyledButton,ButtonContainer } from "./CartStyle";
import CartItems from "./CartItems";

const Cart=(props)=>{
  const cartCtx= useContext(CartContext);
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem=cartCtx.items.length>0;

  const cartItemAddHandler=(item)=>{
    cartCtx.addItem(item)
  };
  const cartItemRemoveHandler=(id)=>{cartCtx.removeItem(id)};

    const CartItemsArray=(
        <ul style={{'listStyleType':'none'}}>
            {
               cartCtx.items.map((item)=>{
                   return  <CartItems 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                    />
                })
            }
        </ul>
    )
    return(
        <Modal style={{'width':'50%'}} onClick={props.cartClose}>
          <>
          {CartItemsArray}
          <div style={{'display':'flex','justifyContent':'space-between'}}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
         
          <ButtonContainer >
            <StyledButton onClick={props.cartClose}>Close</StyledButton>
           {hasItem && <StyledButton>Order</StyledButton>}
          </ButtonContainer>
          </>
         </Modal>
    )
}

export default Cart