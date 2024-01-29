import { useState } from 'react'
import './styles/App.css'

import Controls from './components/Controls'
import GeneralInfoForm from './components/GeneralInfoForm'
import EducationalInfoForm from './components/EducationalInfoForm'
import WorkInfoForm from './components/WorkInfoForm'
import CV from './components/CV'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [educationalInfo, setEducationalInfo] = useState([])
  const [workInfo, setWorkInfo] = useState([])

  return (
    <>
      <div className='islands'>
        <Controls />

        <GeneralInfoForm data={generalInfo} updateData={setGeneralInfo} />

        <EducationalInfoForm
          data={educationalInfo}
          updateData={setEducationalInfo}
        />

        <WorkInfoForm data={workInfo} updateData={setWorkInfo} />
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
