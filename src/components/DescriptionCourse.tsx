import React from 'react';
import people from '../assets/images/people.svg';
import signal from '../assets/images/signal.svg';
import star from '../assets/images/star.svg';
import heart from '../assets/images/heart.svg';
import moon from '../assets/images/moon.svg';
import navigaton from '../assets/images/navigation.svg';

function DescriptionCourse(){
  return(
    <div className="sm:w-3/4 xl:pt-0 pt-7 flex flex-col justify-between mx-auto space-y-4">
      <h2 className=" sm:text-4xl	text-3xl	 font-black text-base  sm:px-0 px-5">Title H2 - Nombre del curso</h2>
      <div className="flex space-x-2 px-1 block  sm:hidden justify-around items-center">
          <h4 className="font-black sm:text-4xl text-2xl">co$349,929</h4>
          <h6 className="strike text-gray-500 sm:text-2xl text-xs	line-through sm:px-0 px-5"> CO$164,434</h6>
      </div>
      <p className="sm:w-4/6  sm:px-0 px-5">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.</p>
      <div className="flex px-1 space-x-2 items-center  sm:px-0 px-5">
          <img className="w-4 h-4" src={people} alt=""/>
          <p className="text-xs text-gray-500">Nivel 1</p>
          <img className="w-4 h-4" src={signal} alt=""/>
          <p className="text-xs text-gray-500">123 Usuarios</p>
          <img className="w-4 h-4"src={star} alt=""/>
          <p className="text-xs text-gray-500"> 4.8</p>
      </div>
      <div className="flex w-80 h-16 space-x-4  sm:px-0 px-5">
        <div className="w-16 h-16 bg-gray-200 border-0 rounded-lg	"></div>
        <div className="flex flex-col justify-center">
          <h5 className="font-bold">Subtitle 3 - Nombre profesor</h5>
          <h6>Body 3 Cargo profesor</h6>
        </div>
      </div>
      <div className=" block  sm:hidden flex flex-col w-full h-44 bg-gray-200 justify-evenly items-center">
          <button className="w-64 bg-gray-700 text-white font-bold py-2 rounded-lg border-4 border-gray-700 rounded">Comprar ahora</button>
        <button className=" w-64 bg-gray-200 hover:bg-gray-700  hover:text-white  text-black font-bold py-2 rounded-lg px-4 border-4 border-gray-700	rounded">Agregar a carrito</button>
      </div>
      <div className="flex w-72 sm:w-96 h-14 justify-between mx-auto sm:mx-0">
        <div className="w-20 h-14 flex flex-col justify-between items-center">
          <img src={heart} alt=""/>
          <p className="text-gray-500">Accion  1</p>
        </div>
        <div className="w-20 h-14 flex flex-col justify-between items-center">
          <img src={moon} alt=""/>
          <p className="text-gray-500">Accion  1</p>
        </div>
        <div className="w-20 h-14 flex flex-col justify-between items-center">
          <img src={navigaton} alt=""/>
          <p className="text-gray-500">Accion  1</p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionCourse;