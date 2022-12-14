import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useAppContext } from '../context/appContext'
import Job from './Job'
import Loading from './Loading'
import PageBtnContainer from './PageBtnContainer'


const JobsContainer = () => {
    const {getJobs, jobs, isLoading,page,totalJobs,search,searchStatus, searchType,sort,numOfPages} = useAppContext()
    useEffect(()=>{
       getJobs()
    },[page,search, searchType,sort,searchStatus])

    if(isLoading){
        return <Loading center />
    }
    if(jobs.length === 0){
        return <Wrapper>
            <h2>No jobs to diplay...</h2>
        </Wrapper>
    }
  return (
      <Wrapper>
          <h5>{totalJobs} job{jobs.length >1 && 's'} found</h5>
          <div className='jobs'>
              {jobs.map((job)=>{
                  return <Job key={job._id}{...job} /> 
              })}
          </div>
          {/* {pagination buttons} */}
          {numOfPages>1 && <PageBtnContainer/>}
      </Wrapper>
    
  )
}

export default JobsContainer