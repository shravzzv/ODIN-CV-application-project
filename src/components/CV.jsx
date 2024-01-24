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

  return (
    <main>
      <h1>{name}</h1>
      <p>
        <a href='mailto:'>{email}</a>
      </p>
      <p>{phone}</p>
      <hr />

      <h2>Education</h2>
      <h3>{course}</h3>
      <p>
        <strong>{school}</strong>
        {', '}
        <small>
          {eduStart} - {eduIsCurrent ? 'present' : eduEnd}
        </small>
      </p>

      <h2>Experience</h2>
      <h3>{position}</h3>
      <p>
        <strong>{company}</strong>
        {', '}
        <small>
          {workStart} - {workIsCurrent ? 'present' : workEnd}
        </small>
      </p>
      <ul>
        {responsibilities.map((item) => (
          <li key={keyNum++}>{item}</li>
        ))}
      </ul>
    </main>
  )
}
