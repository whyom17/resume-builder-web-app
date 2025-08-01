import {useState} from 'react'
import PersonalInfoForm from './PersonalInfoForm'
import SummaryForm from './SummaryForm'
import TechnicalSkillsForm from './TechnicalSkillsForm'
import ProjectsForm from './ProjectsForm'
import ExperienceForm from './ExperienceForm'
import EducationalForm from './EducationalForm'
import ExtracurricularForm from './ExtracurricularForm'

function SectionOrder({data}) {

  const [orderedKeys,setOrderedKeys]=useState(['personal', 'summary', 'education', 'experience', 'projects', 'skills', 'extracurricular'])

  const sectionOrder={
      personal : <PersonalInfoForm data={data.personal}/>,
      summary : <SummaryForm data={data.summary}/>,
      education : <EducationalForm data={data.education}/>,
      experience : <ExperienceForm data={data.experience}/>,
      projects : <ProjectsForm data={data.projects}/>,
      skills : <TechnicalSkillsForm data={data.skills}/>,
      extracurricular : <ExtracurricularForm data={data.extracurricular}/>
    }


    // Function to move a section up in the order
    const moveSectionUp = (keyToMove) => {
        setOrderedKeys(prevKeys => {
            const newKeys = [...prevKeys];
            const currentIndex = newKeys.indexOf(keyToMove);

            if (currentIndex > 0) { // Can only move up if not the first item
                const newIndex = currentIndex - 1;
                const [movedSection] = newKeys.splice(currentIndex, 1); // Remove the section
                newKeys.splice(newIndex, 0, movedSection); // Insert it at the new position
            }
            return newKeys;
        });
    };

    // Function to move a section down in the order
    const moveSectionDown = (keyToMove) => {
        setOrderedKeys(prevKeys => {
            const newKeys = [...prevKeys];
            const currentIndex = newKeys.indexOf(keyToMove);

            if (currentIndex < newKeys.length - 1 && currentIndex !== -1) { // Can only move down if not the last item
                const newIndex = currentIndex + 1;
                const [movedSection] = newKeys.splice(currentIndex, 1); // Remove the section
                newKeys.splice(newIndex, 0, movedSection); // Insert it at the new position
            }
            return newKeys;
        });
    };



  return (
    <>
      {orderedKeys.map((sectionKey, index) => (
                <>
                    {/* The actual form component */}
                      {sectionOrder[sectionKey]}

                    {/* Reordering Controls */}
                    <div className="section-controls">

                        {/* Up Arrow Button */}
                        <button
                            onClick={() => moveSectionUp(sectionKey)}
                            disabled={index === 0} // Disable if it's the first item
                        >
                            &uarr; {/* Up arrow character */}
                        </button>


                        {/* Down Arrow Button */}
                        <button
                            onClick={() => moveSectionDown(sectionKey)}
                            disabled={index === orderedKeys.length - 1} // Disable if it's the last item
                        >
                            &darr; {/* Down arrow character */}
                        </button>

                    </div>
                </>
            ))}
    </>
    );
}


export default SectionOrder;
