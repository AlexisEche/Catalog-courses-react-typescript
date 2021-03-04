import React from 'react';
import logo from '../assets/images/globe.svg';
import menu from '../assets/images/menu.svg';
import search from '../assets/images/search.svg';

function Header(){
  return(
    <header className="flex justify-between items-center py-7  sm:px-0 px-5">
      <img className="sm:hidden" src={menu} alt=""/>
      <div className="flex items-center space-x-2 text-xl	font-black">
        <img src={logo} alt=""/>
        <a href="http://localhost:3000/"><p>Crachcourse</p></a>
      </div>
      <img className="sm:hidden"  src={search} alt=""/>
      <button className="hidden sm:block bg-white hover:bg-gray-700 w-48 hover:text-white  text-black font-extrabold py-2 rounded-lg px-4 border-4 border-gray-700	rounded">Registrate gratis</button>
    </header>
  )
}

export default Header;