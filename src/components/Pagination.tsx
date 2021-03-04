import next from '../assets/images/next.svg';
import back from '../assets/images/back.svg';
import mobile_arrow_next from '../assets/images/mobile_arrow_next.svg';
import mobile_arrow_back from '../assets/images/mobile_arrow_back.svg';


interface Props{
  ComponentsPerPage:any,
  totalComponents:any,
  paginate:any,
  currentPage:any,
}

const Pagination: React.FC<Props> = ({ComponentsPerPage, totalComponents,paginate,currentPage})=>{
  const pageNumbers =[]
  for (let i=1; i <= Math.ceil(totalComponents/ComponentsPerPage); i++){
    pageNumbers.push(i)
  }

  function previousPage(num:Number){
    return num > 1 ? paginate(currentPage-1) : paginate(1)
  }

  function nextPage(num:Number){
    return num < pageNumbers.length ? paginate(currentPage+1) : paginate(pageNumbers.length)
  }

  return(
    <div className="w-full flex justify-end sm:pb-14 sm:pt-0 py-7 sm:py-0  sm:px-16 px-5 ">
      <div className=" h-9 flex justify-between w-96 items-center">
        <div className="sm:border-gray-300 sm:border-2 border-0 p-3 rounded-lg cursor-pointer" onClick={()=>previousPage(currentPage)}>
          <img className="sm:block hidden" src={back} alt=""/>
          <img className="sm:hidden block" src={mobile_arrow_back} alt=""/>
        </div>
        <p className="sm:block hidden">Página</p>
        <p className="sm:hidden block">{currentPage}/{pageNumbers.length}</p>
        <select className="bg-white p-3 border-gray-300 border-2 rounded-lg sm:block hidden"  id="pages" onChange={(e)=> paginate(e.target.value)}>
          {pageNumbers.map(number=>(
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
        <p className="sm:block hidden">de {pageNumbers.length}</p>
        <div className="sm:border-gray-300 sm:border-2 border-0 p-3 rounded-lg cursor-pointer" onClick={()=>nextPage(currentPage)}>
          <img className="sm:block hidden" src={next} alt=""/>  
          <img className="sm:hidden block" src={mobile_arrow_next} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Pagination;