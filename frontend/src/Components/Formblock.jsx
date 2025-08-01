import {useState} from 'react'
import SectionOrder from './SectionOrder';

function Formblock() {
  const [resumeData, setResumeData] = useState(()=>{
    const saved =localStorage.getItem('resumeData')
    return saved ? JSON.parse(saved) :     // checking whether the data is already present in the local storage or not
    {
      personal: {
        name: "",location: "",contactNo: "",emailId: "",linkedIn: "",githubId: "",portfolio: ""
      },
      
      summary: "",
      
      skills: {
        languages: [],frameworks: [],devtools: [],libraries: [],problemsolving: []
      },

      education: [
        {
          institute: "",start: "",end: "",degree: "",grade: "",location: ""
        }
      ],
    
      experience: [
        {
          company: "",start: "",end: "",position: "",location: "",bullets: [""]
        }
      ],
      
      projects: [
        {
          name: "",link: "",tech: [],start: "",end: "",bullets: [""]
        }
      ],

      extracurricular: [
        {
          org: "",start: "",end: "",position: "",location: "",bullets: [""]
        }
      ],
      
      sectionOrder:[
        'personal', 'summary', 'education', 'experience', 'projects', 'skills', 'extracurricular'
      ]
    };
    })      // here the function inside the useState ended
  
  
  return (
    <div id='leftblock'>
    <nav>Resume Form</nav>

    <div id="form-container">
      <SectionOrder data={resumeData}/>
    </div>
  </div>
  )
}

export default Formblock;
