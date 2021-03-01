import React from 'react'
import star from '../assets/images/star.svg';
import starLigth from '../assets/images/starligth.svg';

function BlockStars(starDark:number, starlight:number){
  

  return(
    <div>
      <img src={star} alt=""/>
      <img src={star} alt=""/>
    </div>
  )
}

export default BlockStars;