import '../styles/components/Formblock.css'
import {useState} from 'react'

function EducationalForm({data}) {
  return (
    <div id='education'>
      <heading>Education</heading>
      <form action="">
        <label htmlFor="">Institution: </label>
        <input type="text" /><br />

        <label htmlFor="">Degree: </label>
        <input type="text" /><br />

        <label htmlFor="">Location: </label>
        <input type="text" /><br />

        <label htmlFor="">Grade: </label>
        <input type="text" /><br />

        <label htmlFor="">Start Date: </label>
        <input type="text" /><br />

        <label htmlFor="">End Date: </label>
        <input type="text" /><br />

      </form>
    </div>
  )
}

export default EducationalForm