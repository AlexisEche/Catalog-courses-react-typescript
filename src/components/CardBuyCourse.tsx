import React from 'react';
import { Link } from 'react-router-dom';
import play from '../assets/images/play.svg';

interface Props{
  data: any,
}

const CardBuyCourse: React.FC<Props>=({data})=>{
  console.log(data)

  return(
    <div className="md:w-1/2 w-full mx-auto">
      <div className="sm:h-64 h-48  bg-black flex items-center justify-center ">
        <div className=" w-52 h-20 flex flex-col items-center justify-between">
          <img src={play} alt=""/>
          <h6 className="text-white font-black text-xl">Ver Trailer del curso</h6>
        </div>
      </div>

      <div className="bg-gray-200 rounded-b-lg sm:h-48 h-56 sm:w-full sm:block hidden sm:flex flex-col justify-between p-5">
        <div className="flex space-x-2 px-1 justify-around items-center">
          <h4 className="font-black text-4xl">co${data.price}</h4>
          <h6 className="strike text-gray-500 text-2xl line-through"> CO${data.real_price}</h6>
        </div>
        <Link  to={{pathname:`/checkout/${data.id}`}} >
          <button className="w-full bg-gray-700 text-white font-bold py-2 rounded-lg border-4 border-gray-700 rounded">Comprar ahora</button>
        </Link>
        <button className="bg-gray-200 hover:bg-gray-700  hover:text-white  text-black font-bold py-2 rounded-lg px-4 border-4 border-gray-700	rounded">Agregar a carrito</button>
      </div>
    </div>
  )
}
export default CardBuyCourse;