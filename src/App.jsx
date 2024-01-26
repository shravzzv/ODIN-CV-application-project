import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationalInfo from './components/EducationalInfo'
import WorkInfo from './components/WorkInfo'
import CV from './components/CV'
import Controls from './components/Controls'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [educationalInfo, setEducationalInfo] = useState({
    school: '',
    course: '',
    startDate: '',
    endDate: '',
    isCurrent: false,
  })

  const [workInfo, setWorkInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
    isCurrent: false,
  })

  return (
    <>
      <div className='islands'>
        <Controls />
        <GeneralInfo data={generalInfo} updateData={setGeneralInfo} />
        <EducationalInfo
          data={educationalInfo}
          updateData={setEducationalInfo}
        />
        <WorkInfo data={workInfo} updateData={setWorkInfo} />
      </div>
      <CV
        generalInfo={generalInfo}
        educationalInfo={educationalInfo}
        workInfo={workInfo}
      />
    </>
  )
}

export default App
