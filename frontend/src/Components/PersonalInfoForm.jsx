import {useState} from 'react'
import '../styles/components/Formblock.css'

function PersonalInfoForm({data}) {
  return (
    <div id='personal-info'>
      <h3>Personal Details</h3>
      <form>
        <label >Name: </label>
        <input type="text" placeholder='full name' /><br />

        <label >Location: </label>
        <input type="text" placeholder='city,state'/><br />

        <label >Contact No.: </label>
        <input type="text" placeholder='+91 XXXXXXXXXX'/><br />

        <label >Email Id: </label>
        <input type="text" placeholder='abc@example.com'/><br />

        <label >LinkedIn: </label>
        <input type="text" placeholder='paste URL'/><br />
        
        <label >GitHub: </label>
        <input type="text" placeholder='paste URL'/><br />

        <label >Portfolio Website: </label>
        <input type="text" placeholder='paste URL (if any)'/>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
