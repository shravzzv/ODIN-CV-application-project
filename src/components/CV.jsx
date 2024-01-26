import '../styles/CV.css'

/* eslint-disable react/prop-types */
export default function CV({ generalInfo, educationalInfo, workInfo }) {
  const { name, email, phone } = generalInfo
  const {
    school,
    course,
    startDate: eduStart,
    endDate: eduEnd,
    isCurrent: eduIsCurrent,
  } = educationalInfo
  const {
    company,
    position,
    responsibilities,
    startDate: workStart,
    endDate: workEnd,
    isCurrent: workIsCurrent,
  } = workInfo
  let keyNum = 0

  const formatDate = (dateString) => {
    const options = { month: 'long', year: 'numeric' }
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString('en-US', options)
    return formattedDate
  }

  return (
    <main>
      <h1>{name || 'Full name'}</h1>
      <p>
        <a href={`mailto:${email}`}>{email || 'email'}</a>
      </p>
      <p>{phone || 'phone number'}</p>
      <hr />

      <h2>Education</h2>
      <h3>{course || 'Course'}</h3>
      <p>
        <strong>{school || 'School'}</strong>
        {', '}
        <small>
          {(eduStart && formatDate(eduStart)) || 'started at'} -{' '}
          {eduIsCurrent
            ? 'present'
            : (eduEnd && formatDate(eduEnd)) || 'ended at'}
        </small>
      </p>

      <h2>Experience</h2>
      <h3>{position || 'Position'}</h3>
      <p>
        <strong>{company || 'Company'}</strong>
        {', '}
        <small>
          {(workStart && formatDate(workStart)) || 'started at'} -{' '}
          {workIsCurrent
            ? 'present'
            : (workEnd && formatDate(workEnd)) || 'ended at'}
        </small>
      </p>
      <ul>
        {responsibilities.length > 0 ? (
          responsibilities
            .split('\n')
            .filter((item) => item)
            .map((item) => <li key={keyNum++}>{item}</li>)
        ) : (
          <li>Job responsibilities</li>
        )}
      </ul>
    </main>
  )
}
