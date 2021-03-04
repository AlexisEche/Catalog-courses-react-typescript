import React from 'react';
import people from '../assets/images/people.svg';
import signal from '../assets/images/signal.svg';
import star from '../assets/images/star.svg';
import { Link } from "react-router-dom";

interface Props{
  name: any[],
  price: any[],
  level: any[],
  users: any[],
  score: any[],
  realPrice: any[],
  id: any[],
}

const Card: React.FC<Props> = ({...props})=>{

  return(
    <div className="my-1 w-full md:w-1/2 lg:mb-7 lg:px-2 md:px-2 lg:w-1/3  xl:w-1/4 md:pb-3 pb-6">
      <div className="overflow-hidden rounded-lg shadow-lg ">
        <div className="p-2 card--image w-full bg-gray-300 rounded-t-lg h-40 ">
          <button className=" w-20 h-6 flex text-xs	 items-center justify-center bg-gray-700 text-white rounded-lg  border-4 border-gray-700 rounded">TAG VENTA</button>
        </div>
        <div className="card--info p-3 space-y-2 bg-gray-100">
          <h5 className="font-bold">{props.name}</h5>
          <h6 className="font-normal">Profesor del curso</h6>
          <div className="flex space-x-1 px-1 space-x-2 items-center">
              <img className="w-4 h-4" src={people} alt=""/>
              <p className="text-xs text-gray-500">{props.level}</p>
              <img className="w-4 h-4" src={signal} alt=""/>
              <p className="text-xs text-gray-500">{props.users} Usuarios</p>
              <img className="w-4 h-4"src={star} alt=""/>
              <p className="text-xs text-gray-500">{props.score}</p>
          </div>
          <div className="flex space-x-2 px-1 justify-between items-center">
            <h4 className="font-extrabold text-2xl">co${props.price}</h4>
            <h6 className="strike text-gray-500 text-xs line-through"> CO${props.realPrice}</h6>
          </div>
          <div className="text-center">
          <Link  to={{pathname:`/details/${props.id}`}} >
            <button className="w-full bg-gray-700 text-white font-bold py-2 rounded-lg border-4 border-gray-700 rounded">Comprar ahora</button>
          </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card;