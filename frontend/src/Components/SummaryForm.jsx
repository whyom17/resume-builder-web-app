import {useState} from 'react'
import '../styles/components/Formblock.css'

function SummaryForm({data}) {
  return (
    <div id='summary'>
      <heading>Summary</heading>
      <form >
        <label >Summary: </label>
        <input type="text" placeholder='Your description with regards to aspiring job role'/>
      </form>
    </div>
  )
}

export default SummaryForm