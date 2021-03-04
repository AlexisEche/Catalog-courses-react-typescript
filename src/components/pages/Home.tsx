import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Categories from '../Categories';
import Catalogue from '../Catalogue';
import Pagination from '../Pagination';
import axios from 'axios';

interface Props{
  data: any[],
}

const Home: React.FC<Props> = ()=>{
  let [courses, setCourses] = useState<any[]>([]);
  const [currentPage,setCurrentPage]= useState(1);
  const [coursesPerPage]= useState(8);

  const indexOfLastCourse = currentPage*coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse-coursesPerPage
  const currentCourses = courses.slice(indexOfFirstCourse,indexOfLastCourse)
  
  let categories = Array.from(new Set(courses.map(course=>course.category_name)))
  const [currentPageOfCategorie,setCurrentPageOfCategorie]= useState(1);
  const [categoriesPerPage]= useState(3);

  const indexOfLastCategorie = currentPageOfCategorie*categoriesPerPage
  const indexOfFirstCategorie = indexOfLastCategorie-categoriesPerPage
  const currentCategorie= categories.slice(indexOfFirstCategorie,indexOfLastCategorie)

  const paginateCategories = (pageNumber:any) => setCurrentPageOfCategorie(pageNumber)
  const paginateCourses = (pageNumber:any) => setCurrentPage(pageNumber)

  useEffect(() => {
    const dataset = async()=>{
      await axios.get("http://localhost:8000/api/v1/courses/")
      .then(response => setCourses(response.data));
    }
    dataset()
  }, []);

  return(
    <div className="container mx-auto">
      <div className="sm:px-16 px-0">
        <Header/>
        <Banner/>
      </div>
      <div className="sm:hidden block">
        <Categories data={currentCategorie}/>
        <Pagination ComponentsPerPage={categoriesPerPage} totalComponents={categories.length} paginate={paginateCategories} currentPage={currentPageOfCategorie}/>
      </div>
      <div className="sm:block hidden">
        <Categories data={categories}/>
      </div>
      <Catalogue data={currentCourses}/>
      <Pagination ComponentsPerPage={coursesPerPage} totalComponents={courses.length} paginate={paginateCourses} currentPage={currentPage}/>
    </div>
  )
}

export default Home;
