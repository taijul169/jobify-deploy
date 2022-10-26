import React from 'react'
import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import {HiChevronDoubleLeft,HiChevronDoubleRight} from 'react-icons/hi'

const PageBtnContainer = () => {
    const {numOfPages,page,changePage }  =  useAppContext()
    const pages =  Array.from({length:numOfPages},(_, index)=>{
        return index + 1
    })
    console.log(pages)

    const prevPage =() =>{
      let newPage =page -1
      if(newPage<1){
          newPage = numOfPages
      }
      changePage(newPage)
    }
    const nextPage =() =>{
        let newPage =page +1
        if(newPage>numOfPages){
            newPage = 1
        }
        changePage(newPage)
            }
  return (
    <div>
        <Wrapper>
           <button className='prev-btn' onClick={prevPage}>
           prev<HiChevronDoubleLeft/>
           </button>
           
           <div className='btn-container'>
               {pages.map((pageNumber)=>{
                   return <button 
                   type='button' 
                   className={pageNumber === page?'pageBtn active':'pageBtn'} 
                   key={pageNumber} 
                   onClick={()=>{changePage(pageNumber)}} >
                       {pageNumber}
                </button>
               })}
           </div>
           <button className='next-btn' onClick={nextPage}>
               nex<HiChevronDoubleRight/>
           </button>
        </Wrapper>
    </div>
  )
}

export default PageBtnContainer