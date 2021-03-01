import React from 'react';
import arrowDown from '../assets/images/arrow-down.svg';
import arrowTop from '../assets/images/arrow-top.svg';

function FrequentQuestions(){
  return(
    <div className="md:w-7/12 w-full  sm:px-0 px-5">
      <h3 className="font-black sm:text-4xl text-2xl pt-10 pb-9 sm:pt-12 sm:pb-6">Preguntas frecuentes</h3>
      <div className="space-y-4 pb-28">
        <div className="flex items-start justify-between border rounded-lg p-4">
          <div>
            <h6>Pregunta 1</h6>
            <p>Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla.</p>
          </div>
          <img  src={arrowTop} alt=""/>
        </div>
        <div className="flex items-start justify-between border rounded-lg p-4">
          <div>
            <h6>Pregunta 1</h6>
            <p className="md:hidden block">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla.</p>
          </div>
          <img  src={arrowDown} alt=""/>
        </div>
        <div className="flex items-start justify-between border rounded-lg p-4">
          <div>
            <h6>Pregunta 1</h6>
            <p className="md:hidden block">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla.</p>
          </div>
          <img  src={arrowDown} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default FrequentQuestions;