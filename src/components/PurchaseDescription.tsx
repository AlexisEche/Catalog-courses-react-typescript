
import React from 'react'
import people from '../assets/images/people.svg';
import signal from '../assets/images/signal.svg';
import star from '../assets/images/star.svg';
import arrowRight from '../assets/images/arrow-right.svg';

interface Props{
  data: any,
}

const PurchaseDescription: React.FC<Props>=({data})=>{
  return(
    <div className="sm:h-screen sm:pt-12 sm:bg-gray-100 sm:w-5/12 sm:pl-20 sm:pr-24 sm:mx-0  p-4">

      <div className="flex sm:hidden block sm:bg-white text-sm h-6 space-x-1 py-7">
        <div className="flex items-center space-x-1">
          <div className="flex items-center font-bold justify-center text-white  bg-gray-800 rounded-full w-5 h-5">1</div>
          <p className="font-bold text-sm">Proceso de pago</p>
        </div>
        <img src={arrowRight} alt=""/>
        <div className="flex items-center space-x-1">
          <div className="flex items-center font-bold  justify-center text-white  bg-gray-300 rounded-full w-5 h-5">2</div>
          <p className="font-bold text-sm text-gray-300">Paso 2</p>
        </div>
        <img src={arrowRight} alt=""/>
        <div className="sm:flex items-center space-x-1 sm:block hidden">
          <div className="flex items-center font-bold  justify-center text-white  bg-gray-300 rounded-full w-5 h-5">3 </div>
          <p className="font-bold text-sm text-gray-300">Paso 3</p>
        </div>
      </div>
    <div className="bg-gray-100 sm:w-full  p-0 sm:p-0 p-4 sm:m-0 mx-auto">
      <div className="sm:flex sm:flex-row sm:space-x-6 space-x-0 pb-6 flex-col">
        <div className="w-36 h-28	bg-gray-500 border-0 rounded-lg"></div>
        <div className="flex flex-col justify-center ">
          <h5>{data.name}</h5>
          <h6>Profesor del curso</h6>
        <div className="flex space-x-2 space-y-2 items-center ">
          <img className="w-4 h-4" src={people} alt=""/>
          <p className="text-xs text-gray-500">{data.level}</p>
          <img className="w-4 h-4" src={signal} alt=""/>
          <p className="text-xs text-gray-500">{data.users} Usuarios</p>
          <img className="w-4 h-4"src={star} alt=""/>
          <p className="text-xs text-gray-500">{data.course_score}</p>
        </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100  w-full p-0 sm:p-0 p-4  s:m-0 ">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p className="text-gray-400">CO${data.real_price}</p>
      </div>
      <div className="flex justify-between">
        <p>Tarjeta</p>
        <p className="text-gray-400">{data.discount}%</p>
      </div>
      <div className="flex justify-between">
        <p>Total a pagar</p>
        <p className="font-extrabold text-gray-900">CO${data.price}</p>
      </div>
    </div>
      

      <div className="sm:pt-14 sm:block hidden">
        <p className="pb-2">Notas legales</p>
        <p className="text-xs">
        Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.
        </p>
      </div>
    </div>
  )
}

export default PurchaseDescription;