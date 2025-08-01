import {useState} from 'react'
import '../styles/components/Formblock.css'

function ProjectsForm({data}) {
  return (
    <div id='projects'>
      <heading>Projects</heading>
      <form action="">
      <label htmlFor="">Name: </label>
      <input type="text" placeholder='Project Name'/><br />

      <label htmlFor="">Link:</label>
      <input type="text" placeholder='paste URL (if any)'/><br />

      <label htmlFor="">Technology Used: </label>
      <input type="text" /><br />

      <label htmlFor="">Start Date: </label>
      <input type="text" /><br />

      <label htmlFor="">End Date: </label>
      <input type="text" placeholder='present (if still working)'/><br />

      <label htmlFor="">Project Description: </label><br />
      <ul>
        <li><input type="text" placeholder=''/></li><br />
      </ul>
      </form>
    </div>
  )
}

export default ProjectsForm