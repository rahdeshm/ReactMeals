import { Fragment,useState} from "react";
import Cart from "./Cart/Cart"
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./Store/Cart-Provider";
import Card from "./UI/Card";
import Modal from "./UI/Modal";
function App() {

  const[cartIsShown,setCartISOpen]=useState(false);
  
  const showCartHandler=()=>{
    setCartISOpen(true);
  }
  
  const hideCardHandler=()=>{
    setCartISOpen(false)
  }
  return (
    <CartProvider>
     { cartIsShown && <Cart cartClose={hideCardHandler}/>} 
     
      <Header onShowCart={showCartHandler}/>
      <main>
       <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
