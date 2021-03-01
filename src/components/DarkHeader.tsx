import React from 'react';
import logoWhite from '../assets/images/globeWhite.svg';

function DarkHeader(){
return(
  <div className="flex justify-center items-center h-16 bg-gray-900 space-x-2 text-xl	font-black text-white ">
    <img src={logoWhite} alt=""/>
    <p>Crachcourse</p>
  </div>
)
}

export default DarkHeader;