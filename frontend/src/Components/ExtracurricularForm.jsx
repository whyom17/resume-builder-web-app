import {useState} from 'react'
import '../styles/components/Formblock.css'

function ExtracurricularForm({data}) {
  return (
    <div id='extracurricular'>
      <heading>Extracurricular</heading>
      <form action="">
        <label htmlFor="">Organisation: </label>
        <input type="text" placeholder='any society, club, community, ...etc.'/><br />

        <label htmlFor="">Position: </label>
        <input type="text" /><br />

        <label htmlFor="">Location: </label>
        <input type="text" /><br />

        <label htmlFor="">Start Date: </label>
        <input type="text" placeholder='month, year'/><br />

        <label htmlFor="">End Date: </label>
        <input type="text" placeholder='present (if still working)'/><br />

        <label htmlFor="">Work Description: </label>
        <ul>
          <li><input type="text" /></li><br />
        </ul>

      </form>
    </div>
  )
}

export default ExtracurricularForm