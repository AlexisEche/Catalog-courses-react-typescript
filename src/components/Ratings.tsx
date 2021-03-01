import React from 'react';
import star from '../assets/images/star.svg';
import starLigth from '../assets/images/starligth.svg';
import rectangle1 from '../assets/images/rectangle1.svg';
import rectangle2 from '../assets/images/rectangle2.svg';
import rectangle3 from '../assets/images/rectangle3.svg';
import starSmall from '../assets/images/starSmall.svg';
import arrowDown from '../assets/images/arrow-down.svg';
import BlockStars from './BlockStars'

function Ratings(){
  return(
    <div className="flex sm:w-3/6 w-full flex-col justify-between  sm:px-0 px-5">
      <h3 className="pt-12 font-black sm:text-4xl text-2xl">Valoraciones</h3> 
      <div className="sm:flex-row sm:flex w-10/12 justify-between pb-6 flex-col">
        <div className="flex flex-col justify-center pr-8">
          <p className="font-extrabold text-5xl">4.8</p>
          <div className="flex">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={starLigth} alt=""/>
          </div>
          <p className="text-gray-500 text-xs">Media total</p>
        </div> 
        <div className="flex space-x-8">

          <div className="flex flex-col justify-around">
            <img src={rectangle3} alt=""/>
            <img src={rectangle2} alt=""/>
            <img src={rectangle1} alt=""/>
            <img src={rectangle1} alt=""/>
            <img src={rectangle1} alt=""/>
          </div>
          <div>
            <div className="flex">
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <p className="pl-2">83%</p>
            </div>
            <div className="flex">
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={starLigth} alt=""/>
              <p className="pl-2">17%</p>
            </div>
            <div className="flex">
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={starLigth} alt=""/>
              <img src={starLigth} alt=""/>
              <p className="pl-2">0%</p>
            </div>
            <div className="flex">
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={starLigth} alt=""/>
              <img src={starLigth} alt=""/>
              <img src={starLigth} alt=""/>
              <p className="pl-2">0%</p>
            </div>
            <div className="flex">
              <img src={star} alt=""/>
              <img src={starLigth} alt=""/>
              <img src={starLigth} alt=""/>
              <img src={starLigth} alt=""/>
              <img src={starLigth} alt=""/>
              <p className="pl-2">0%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="w-36 h-10 flex justify-between ">
          <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
          <div className="">
            <p className="font-bold">Usuario213</p>
            <div className="flex">
              <img src={starSmall} alt=""/>
              <img src={starSmall} alt=""/>
              <img src={starSmall} alt=""/>
              <img src={starSmall} alt=""/>
              <img src={starSmall} alt=""/>
            </div>
          </div>
        </div>
        <p className="w-full">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sed ut.</p>
      </div>
      <div className="flex pt-4">
        <p className="text-lg font-bold">texlink</p>
        <img src={arrowDown} alt=""/>
      </div>

    </div>
  )
}

export default Ratings;             