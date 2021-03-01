import React from 'react';
import arrowDown from '../assets/images/arrow-down.svg'; 
 
function ExplanationCourse(){
  return(
    <div className="xl:w-7/12 w-full  flex flex-col justify-between sm:px-0 px-5">
      <h3 className="font-black sm:text-4xl text-2xl">H3 - ¿De qué trata este curso?</h3>
      <p className="py-6">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.</p>
      <div className="flex pb-12">
        <p className="text-lg font-bold">texlink</p>
        <img src={arrowDown} alt=""/>
      </div>
    </div>
  )
}

export default ExplanationCourse;