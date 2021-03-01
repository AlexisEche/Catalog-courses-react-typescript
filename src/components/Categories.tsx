import React from 'react';
import announcement from '../assets/images/announcement.svg';

interface Props{
  data: any[],
}

const Categories: React.FC<Props> =({data})=>{
  let categories = Array.from(new Set(data.map(course=>course.category_name)))

  return(
    <div className="pt-14 space-y-4  sm:px-16 px-5">
      <h4 className="text-2xl font-black">Title H4 - Categorias</h4>
      <div className="flex space-x-5 overflow-x-auto">

      {categories.map((value:any,index:any) => {
          return <div key={index} className=" bg-gray-100 flex flex-col items-center justify-center h-28 min-w-32 rounded-xl py-6 px-7">
                    <img src={announcement} alt=""/>
                    <p className="font-bold">{value}</p>
                </div>
        })}
      </div>
    </div>
  )
}

export default Categories;