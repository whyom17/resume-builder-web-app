import {useState} from 'react'
import '../styles/components/Formblock.css'

function ExperienceForm({data}) {
  return (
    <div id='experience'>
      <heading>Experience</heading>
      <form action="">
        <label htmlFor="">Organisation/ Institution: </label>
        <input type="text" /><br />

        <label htmlFor="">Start Date: </label>
        <input type="text" /><br />

        <label htmlFor="">End Date: </label>
        <input type="text" placeholder='present (if still working)'/><br />

        <label htmlFor="">Position: </label>
        <input type="text" /><br />

        <label htmlFor="">Location: </label>
        <input type="text" placeholder='city,state'/><br />

        <label htmlFor="">Work Description: </label>
        <ul>
          <li><input type="text" /></li><br />
        </ul>

      </form>
    </div>
  )
}

export default ExperienceForm