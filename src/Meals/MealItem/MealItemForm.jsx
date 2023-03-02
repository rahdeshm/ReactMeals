import React, { useRef,useState} from 'react'
import Input from '../../UI/Input';
import { AddItem } from './MealItemFormStyle';

const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid]= useState(false);
  const amountInputRef=useRef();
  const submitHandler=(event)=>{
    event.preventDefault();
     
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=  +enteredAmount;

   if(enteredAmount.trim().length===0 || enteredAmountNumber<0 || enteredAmountNumber>5){
      setAmountIsValid(true)
      return; 
   }
   else{
    setAmountIsValid(false)
   }
   props.onAddToCart(enteredAmountNumber);
    console.log(typeof(enteredAmount));
  }
   
  return (
    <form onSubmit={submitHandler} style={{'text-align':'right'}}>
      <Input 
        ref={amountInputRef}
        label='Amount' 
        input={{
        type:'number',
        id:'amount',
        min:1,
        max:7,
        step:1, 
        defaultValue:'1'
      }}/>
      <AddItem>+ Add</AddItem>
      <div>
      {amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
     
    </form>
  )
}

export default MealItemForm