import React, { useEffect, useState } from 'react'
import Header from '../Header';
import DescriptionCourse from '../DescriptionCourse';
import TemaryCourse from '../TemaryCourse';
import ExplanationCourse from '../ExplanationCourse';
import ProyectsOfCourse from '../ProyectsOfCourse';
import Ratings from '../Ratings';
import FrequentQuestions from '../FrequentQuestions';
import CardBuyCourse from '../CardBuyCourse';
import axios from 'axios';

interface Props{
  match: any,
}

const DetailOfCourse: React.FC<Props> = ({match}) =>{
  const [currentCourse,setCurrentCourse]:any = useState({})
  const idCurrentCourse = match.params.id

  useEffect(() => {
    const idCourse = async()=>{
      await axios.get(`https://catalog-courses-django.herokuapp.com/api/v1/courses/${idCurrentCourse}/`)
      .then(response => setCurrentCourse(response.data));
    }
    idCourse()
  }, [idCurrentCourse]);

  return(
    <div className="container mx-auto sm:px-16 px-0">
      <Header/>
      <div className="xl:flex xl:flex-between flex-row-reverse w-full">
        <CardBuyCourse data={currentCourse}/> 
        <DescriptionCourse data={currentCourse}/>
      </div>
      <TemaryCourse/>
      <ExplanationCourse/>
      <ProyectsOfCourse/>
      <Ratings data={currentCourse}/>
      <FrequentQuestions/>

    </div>
  )
}

export default DetailOfCourse;