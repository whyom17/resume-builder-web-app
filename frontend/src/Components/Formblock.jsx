import React from 'react'
import '../styles/components/Formblock.css'
import SectionOrder from './SectionOrder'
import PersonalInfoForm from './PersonalInfoForm'
import SummaryForm from './SummaryForm'
import TechnicalSkillsForm from './TechnicalSkillsForm'
import EducationalForm from './EducationalForm'
import ExperienceForm from './ExperienceForm'
import ProjectsForm from './ProjectsForm'
import ExtracurricularForm from './ExtracurricularForm'

// --- Component Map ---
// const formComponentMap = {
//     personalInfo: PersonalInfoForm,
//     summary: SummaryForm,
//     technicalSkills: TechnicalSkillsForm,
//     education: EducationalForm,
//     experience: ExperienceForm,
//     projects: ProjectsForm,
//     extracurricular: ExtracurricularForm,
// };


function Formblock() {
  return (
    <div id='leftblock'>
    <nav>
        Resume Details
    </nav>
    <div id='form-container'>
        {/* The SectionOrder component to control the layout */}
        <SectionOrder />

        {/* Individual Form Components */}
        <PersonalInfoForm />
        <SummaryForm />
        <TechnicalSkillsForm />
        <EducationalForm />
        <ExperienceForm />
        <ProjectsForm />
        <ExtracurricularForm />

    </div>
    </div>
  )
}

export default Formblock