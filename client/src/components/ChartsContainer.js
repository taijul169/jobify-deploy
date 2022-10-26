import React, { useState } from 'react'
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'

const ChartsContainer = () => {
 const [barChart,setBarChart] = useState(true)
  const {monthlyApplications:data} = useAppContext()
  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <button type='button' onClick={()=>setBarChart(!barChart)}>
        {barChart?'AreaChart':'BarChart'}
       </button> 
      {barChart ?  <BarChart data={data}/>:<AreaChart data={data}/>}
     
    </Wrapper>
  )
}

export default ChartsContainer