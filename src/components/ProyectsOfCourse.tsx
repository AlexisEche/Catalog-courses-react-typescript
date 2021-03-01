import React from 'react';

function ProyectsofCourse(){
  return(
    <div className="sm:px-0 px-5">
      <h3 className="font-black sm:text-4xl text-2xl pb-6">H3 - Proyectos del curso</h3>
      <div className="xl:w-7/12 flex space-x-2 xl:space-x-5 overflow-x-auto">
        <div className="xl:w-80 xl:h-80 w-36 h-36 bg-gray-400 flex items-end p-4 rounded-xl">
          <div className="flex w-28 h-6 justify-between items-center">
            <div className="circle w-6 h-6 bg-gray-800 rounded-full"></div>
            <p className="text-white font-bold text-sm">user_name</p>
          </div>
        </div>
        <div className="xl:grid  xl:grid-cols-2 xl:grid-rows-2 xl:gap-5 flex xl:space-x-0 space-x-2">
          <div className="bg-gray-400 flex items-end p-4 rounded-xl">
            <div className="flex w-28 h-6 justify-between items-center">
              <div className="circle w-6 h-6 bg-gray-800 rounded-full"></div>
              <p className="text-white font-bold text-sm">user_name</p>
            </div>
          </div>
          <div className="bg-gray-400 flex items-end p-4 rounded-xl">
            <div className="flex w-28 h-6 justify-between items-center">
              <div className="circle w-6 h-6 bg-gray-800 rounded-full"></div>
              <p className="text-white font-bold text-sm">user_name</p>
            </div>
          </div>
          <div className="bg-gray-400 flex items-end p-4 rounded-xl">
            <div className="flex w-28 h-6 justify-between items-center">
              <div className="circle w-6 h-6 bg-gray-800 rounded-full"></div>
              <p className="text-white font-bold text-sm">user_name</p>
            </div>
          </div>
          <div className="bg-gray-800 w-36  flex justify-center items-center flex p-4 rounded-xl">
              <p className="text-white text-5xl	font-extrabold">+07</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProyectsofCourse;