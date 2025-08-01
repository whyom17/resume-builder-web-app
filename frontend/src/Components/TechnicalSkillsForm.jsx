import {useState} from 'react'
import '../styles/components/Formblock.css'

function TechnicalSkillsForm({data}) {
  return (
    <div id='tech-skills'>
      <heading>Technical Skills</heading>
      <form >
        <label htmlFor="">Languages: </label>
        <input type="text" placeholder=''/><br />

        <label htmlFor="">Frameworks: </label>
        <input type="text" placeholder=''/><br />

        <label htmlFor="">Libraries: </label>
        <input type="text" /><br />

        <label htmlFor="">DevTools: </label>
        <input type="text" /><br />

        <label htmlFor="">Problem Solving: </label>
        <input type="text" />
      </form>
    </div>
  )
}

export default TechnicalSkillsForm