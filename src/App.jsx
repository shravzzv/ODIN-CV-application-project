import GeneralInfo from './components/GeneralInfo'
import EducationalInfo from './components/EducationalInfo'
import WorkInfo from './components/WorkInfo'
import CV from './components/CV'

function App() {
  return (
    <>
      <div className='islands'>
        <GeneralInfo />
        <EducationalInfo />
        <WorkInfo />
      </div>
      <CV />
    </>
  )
}

export default App
