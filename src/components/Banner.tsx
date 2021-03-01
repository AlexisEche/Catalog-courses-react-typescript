import React from 'react';

function Banner(){
  return(
    <div className="h-80 banner bg-gray-100 rounded-none sm:rounded-lg flex items-center justify-center">
      <div className="text-center space-y-6">
        <h2 className="text-center font-black	text-4xl">Title H2 - <br/> banner cursos nuevos</h2>
        <button className="w-56 bg-gray-900 text-white font-bold py-2 rounded-lg px-4  rounded">Comprar ahora</button>
      </div>
    </div>
  )
}

export default Banner;