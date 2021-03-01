import React from 'react'
import Header from '../Header';
import DescriptionCourse from '../DescriptionCourse';
import TemaryCourse from '../TemaryCourse';
import ExplanationCourse from '../ExplanationCourse';
import ProyectsOfCourse from '../ProyectsOfCourse';
import Ratings from '../Ratings';
import FrequentQuestions from '../FrequentQuestions';
import CardBuyCourse from '../CardBuyCourse';

function DetailOfCourse(){
  return(
    <div className="container mx-auto sm:px-16 px-0">
      <Header/>
      <div className="xl:flex xl:flex-between flex-row-reverse w-full">
        <CardBuyCourse/>
        <DescriptionCourse/>
      </div>
      <TemaryCourse/>
      <ExplanationCourse/>
      <ProyectsOfCourse/>
      <Ratings/>
      <FrequentQuestions/>

    </div>
  )
}

export default DetailOfCourse;