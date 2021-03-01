import React from 'react'
import AdvancedSearchEngine from './AdvancedSearchEngine'
import Card from './Card'
interface Props{
  data: any[],
}
const Catalogue: React.FC<Props> = ({data})=>{
  let cards = Array.from(new Set(data.map(course=>course)))
  
  return(
    <div className="pt-14 space-y-10  sm:px-16 px-5  ">
      <AdvancedSearchEngine/>
      <div className="container my-12 mx-auto">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
          {cards.map((card)=>{
            return <Card name={card.name} price={card.price} realPrice={card.real_price} level={card.level} users={card.users} score={card.course_score}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Catalogue;