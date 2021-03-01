
import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Categories from '../Categories';
import Catalogue from '../Catalogue';

interface Props{
  data: any[],
}

const Home: React.FC<Props> = ({data})=>{

  return(
    <div className="container mx-auto">
      <div className="sm:px-16 px-0">
        <Header/>
        <Banner/>
      </div>
      <Categories data={data}/>
      <Catalogue data={data}/>
    </div>
  )
}

export default Home;