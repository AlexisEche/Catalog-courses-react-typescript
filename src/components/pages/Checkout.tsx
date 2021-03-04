import React, { useEffect, useState } from 'react'
import FormBuyCourse from '../FormBuyCourse';
import PurchaseDescription from '../PurchaseDescription';
import DarkHeader from '../DarkHeader';
import axios from 'axios';
interface Props{
  match: any,
}

const Checkout: React.FC<Props> = ({match}) =>{
  const [currentCourse,setCurrentCourse]:any = useState({})
  const idCurrentCourse = match.params.id

  useEffect(() => {
    const idCourse = async()=>{
      await axios.get(`http://localhost:8000/api/v1/courses/${idCurrentCourse}/`)
      .then(response => setCurrentCourse(response.data));
    }
    idCourse()
  }, [idCurrentCourse]);

  return(
    <div className="w-full">
      <div className="flex flex-col ">
        <DarkHeader/>
        <div className="sm:flex sm:flex-row-reverse justify-between ">
          <PurchaseDescription data={currentCourse}/>
          <FormBuyCourse data={currentCourse}/>
        </div>
      </div>
    </div>
  )
}
export default Checkout;
