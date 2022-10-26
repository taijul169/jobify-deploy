import React from 'react'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage' 
import {FormRow,Alert,FormRowSelect} from '../../components'


const AddJob = () => {

  const {showAlert, displayAlert, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing,handleChange,clearValues,isLoading,createJob,editJob} = useAppContext()
const handleSubmit = e=>{
  e.preventDefault()
  if(!position || !company || !jobLocation){
    displayAlert()
    return
  }
  if(isEditing){
    //eventaually edit job
    editJob()
    return 
  }
  createJob()
  console.log('create-job')
}
  const handelJobInput =(e)=>{
    const name= e.target.name
    const value= e.target.value
    handleChange({name, value})
    console.log(`${name}:${value}`)
  }
  return (
   <Wrapper>
     <form className='form'>
       <h3>{isEditing?'edit job':'add job'}</h3>
       {showAlert && <Alert/>}
       <div className='form-center'>
         {/* position */}
         <FormRow 
         type='text'
         name='position'
         value={position}
         handleChange={handelJobInput}
         />
          {/* company */}
          <FormRow 
         type='text'
         name='company'
         value={company}
         handleChange={handelJobInput}
         />
         {/* location */}
         <FormRow 
         labelText='Job Location'
         type='text'
         name='jobLocation'
         value={jobLocation}
         handleChange={handelJobInput}
         />
         {/* job status */}
         <FormRowSelect 
         name='status' 
         value={status}
         handleChange={handelJobInput}
         list={statusOptions}
        />
         {/* job type */}
         <FormRowSelect 
         name='jobType' 
         labelText='Job type'
         value={jobType}
         handleChange={handelJobInput}
         list={jobTypeOptions}
        />
         
         <div className='btn-container'>
           {/* submit button */}
           <button 
           type="submit" 
           className='btn btn-block submit-btn' 
           onClick={handleSubmit}
           disabled={isLoading}
           >
             Submit
           </button>
             {/* clear button */}
             <button 
              className='btn btn-block clear-btn' 
              onClick={(e)=>{
                e.preventDefault()
                console.log("hello")
                clearValues()
              }}
              >
             Clear All
           </button>

         </div>
       </div>
     </form>
   </Wrapper>
  )
}

export default AddJob