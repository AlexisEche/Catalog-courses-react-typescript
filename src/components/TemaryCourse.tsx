import React from 'react';
import arrowDown from '../assets/images/arrow-down.svg'; 
import unlock from '../assets/images/unlock.svg'; 

function TemaryCourse(){
  return (
    <div className="w-5/6	 flex flex-col justify-between pt-6 space-y-6 pb-10  sm:px-0 px-5">
      <h3 className="font-black sm:text-4xl text-2xl">H3 - Temario del curso</h3>
      <div className=" xl:w-4/6 w-full space-y-5">
        <div className="space-y-4">
          <h6 className="text-lg font-bold">Introducción</h6>
          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="sm:text-lg">1. Un cuento de superación con todo</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
            <div className="flex justify-between">
              <p className="sm:text-lg">2. El no ilustrador</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
            <div className="flex justify-between">
              <p className="sm:text-lg">3. Break 1: Súbete al robot</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h6 className="text-lg font-bold">Bildungsroman</h6>
          <div className=" space-y-2">
            <div className="flex justify-between">
              <p className="sm:text-lg">4. Objetivo de Branding</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
            <div className="flex justify-between">
              <p className="sm:text-lg">5. Público Objetivo</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
            <div className="flex justify-between">
              <p className="sm:text-lg">6. Selecciona tu Red Social</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h6 className="text-lg font-bold">¿Qué hacer con tu vida?</h6>
          <div className=" space-y-2">
            <div className="flex justify-between">
              <p className="sm:text-lg">4. Objetivo de Branding</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
            <div className="flex justify-between">
              <p className="sm:text-lg">5. Público Objetivo</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
            <div className="flex justify-between">
              <p className="sm:text-lg">6. Selecciona tu Red Social</p>
              <img className="hidden sm:block" src={unlock} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="text-lg font-bold">texlink</p>
        <img src={arrowDown} alt=""/>
      </div>
    </div>
  )
}
export default TemaryCourse;