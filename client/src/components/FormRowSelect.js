import React from 'react'

const FormRowSelect = ({labelText,name,value,handleChange,list}) => {
  return (
    <div className='form-row'>
    <label htmlFor={name} className='form-lable'>
      {labelText || name}
    </label>
    <select 
       name={name}
       value={value}
       onChange={handleChange}
       className="form-select"
       >
      {list.map((itemValue, index)=>{
           return <option key={index}>{itemValue}</option>
      })}
    </select>

  </div>
  )
}

export default FormRowSelect