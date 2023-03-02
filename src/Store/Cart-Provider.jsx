import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
     
      if(action.type==='ADD'){
        const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          );
          const existingCartItem = state.items[existingCartItemIndex];
          let updatedItems;
      
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              amount: existingCartItem.amount + 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            updatedItems = state.items.concat(action.item);
          }
      
          return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
         };}
      if(action.type==='REMOVE'){
        
        const existingCartItemIndex = state.items.findIndex(  
          (item) => {
             return item.id === action.id
          }
        );
         let existingCartItem=state.items[existingCartItemIndex];
         const updatedTotalAmount =
        state.totalAmount-existingCartItem.amount;
        if(existingCartItemIndex && existingCartItem.amount===1){
         const updatedItems=  state.items.filter((item)=>{
            return item.id!==action.id
           }) 
           return {
            items: updatedItems,
            totalAmount: 0
           }
        }
        else if(existingCartItem.amount>0){
         let updatedItem= {...existingCartItem,amount:existingCartItem.amount-1};
         let updatedItems=[...state.items];
         updatedItems[existingCartItemIndex]=updatedItem;
         return{
          items: updatedItems,
         totalAmount: updatedTotalAmount,
         }
        }


      }
         return{
            items:[],
            totalAmount:0
         } 
}

const CartProvider=props=>{
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler=item=>{
        dispatchCartAction({type:'ADD',item:item});
    };
    const removeItemFromCartHandler=id=>{
        dispatchCartAction({type:'REMOVE',id:id})
    };
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
         {props.children}
    </CartContext.Provider>
}

export default CartProvider



// import { createContext, useState, useReducer } from 'react';

// import { createAction } from '../utils/reducer/reducer.utils';

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   // find the cart item to remove
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // check if quantity is equal to 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const CART_ACTION_TYPES = {
//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
//   SET_CART_ITEMS: 'SET_CART_ITEMS',
//   SET_CART_COUNT: 'SET_CART_COUNT',
//   SET_CART_TOTAL: 'SET_CART_TOTAL',
// };

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in cartReducer`);
//   }
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
//     cartReducer,
//     INITIAL_STATE
//   );

//   const updateCartItemsReducer = (cartItems) => {
//     const newCartCount = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//   const newCartTotal = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//   const payload = {
//       cartItems,
//       cartCount: newCartCount,
//       cartTotal: newCartTotal,
//    };

//     dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
//   };

//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   };

//   const removeItemToCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateCartItemsReducer(newCartItems);
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateCartItemsReducer(newCartItems);
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };