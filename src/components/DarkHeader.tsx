import React from 'react';
import logoWhite from '../assets/images/globeWhite.svg';

function DarkHeader(){
return(
  <div className="flex justify-center items-center h-16 bg-gray-900 space-x-2 text-xl	font-black text-white ">
    <img src={logoWhite} alt=""/>
    <a href="http://localhost:3000/"><p>Crachcourse</p></a>
  </div>
)
}

export default DarkHeader;