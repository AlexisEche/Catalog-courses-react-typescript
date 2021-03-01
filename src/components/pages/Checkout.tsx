import React from 'react'
import FormBuyCourse from '../FormBuyCourse';
import PurchaseDescription from '../PurchaseDescription';
import DarkHeader from '../DarkHeader';

function Checkout(){
  return(
    <div className="w-full">
      <div className="flex flex-col ">
        <DarkHeader/>
        <div className="sm:flex sm:flex-row-reverse justify-between ">
          <PurchaseDescription/>
          <FormBuyCourse/>
        </div>
      </div>
    </div>
  )
}
export default Checkout;
