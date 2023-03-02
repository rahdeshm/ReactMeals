import React, { Fragment } from "react";
import { Head,Image } from "./HeaderStyles";
import tableimg from '../assets/meals.jpeg'
import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{

    return (
        <Fragment>
         <Head>
           <h1 className="logo">ReactMeals</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
         </Head>
          <Image>
           <img src={tableimg} alt='img table'/>
          </Image>
      
        </Fragment>
       
    )
}

export default Header