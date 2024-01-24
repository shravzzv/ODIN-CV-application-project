import GeneralInfo from './components/GeneralInfo'
import EducationalInfo from './components/EducationalInfo'
import WorkInfo from './components/WorkInfo'
import CV from './components/CV'

function App() {
  const generalInfo = {
    name: 'Johh Doe',
    email: 'johndoe@mail.com',
    phone: '9123456789',
  }
  const educationalInfo = {
    school: 'Harvard University',
    course: 'Bachelor of Science in Computer Science',
    startDate: '2019-09-01',
    endDate: '2023-05-30',
    isCurrent: true,
  }

  const workInfo = {
    company: 'ACME Inc.',
    position: 'Frontend Developer',
    responsibilities: [
      'Developing responsive and user-friendly websites from design mockups.',
      'Maintaining and updating legacy webpages to ensure optimal performance.',
      'Collaborating with cross-functional teams to implement new features.',
      'Conducting code reviews and providing constructive feedback to team members.',
    ],
    startDate: '2019-05-15',
    endDate: '2022-08-20',
    isCurrent: false,
  }

  return (
    <>
      <div className='islands'>
        <GeneralInfo />
        <EducationalInfo />
        <WorkInfo />
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
