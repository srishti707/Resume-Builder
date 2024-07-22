
import { useParams } from 'react-router-dom'
import BasicDetails from './ResumeDetails/BasicDetails';
import Education from './ResumeDetails/Education';
import Internships from './ResumeDetails/Internships';
import Skills from './ResumeDetails/Skills';
import Projects from './ResumeDetails/Projects';
import Achievements from './ResumeDetails/Achievements';

function RenderForms() {
   const {details} =useParams();
  return (
    <div className='col-span-10 overflow-y-scroll '>
    {
        details==="basicDetails" ? <BasicDetails/>
        : details==="education" ?<Education/>
        :details==="internships"?<Internships/>
        :details==="skills"?<Skills/>
        :details==="Projects"?<Projects/>
        :details==="Achievements"?<Achievements/>:
        null
    }
    </div>
  )
}

export default RenderForms
