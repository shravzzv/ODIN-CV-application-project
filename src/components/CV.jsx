/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import '../styles/CV.css'

export default function CV({ generalInfo, educationalInfo, workInfo }) {
  const { name, email, phone } = generalInfo

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
        <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
          {email || 'email'}
        </a>
      </p>
      <p>{phone || 'phone number'}</p>
      <hr />

      <h2>Education</h2>
      {educationalInfo.map((item) => {
        const { id, school, course, startDate, endDate, isCurrent } = item

        return (
          <Fragment key={id}>
            <h3>{course || 'Course'}</h3>
            <p>
              <strong>{school || 'School'}</strong>
              {', '}
              <small>
                {(startDate && formatDate(startDate)) || 'started at'} -{' '}
                {isCurrent
                  ? 'present'
                  : (endDate && formatDate(endDate)) || 'ended at'}
              </small>
            </p>
          </Fragment>
        )
      })}

      <h2>Experience</h2>
      {workInfo.map((item) => {
        const {
          id,
          company,
          position,
          responsibilities,
          startDate,
          endDate,
          isCurrent,
        } = item

        return (
          <Fragment key={id}>
            <h3>{position || 'Position'}</h3>
            <p>
              <strong>{company || 'Company'}</strong>
              {', '}
              <small>
                {(startDate && formatDate(startDate)) || 'started at'} -{' '}
                {isCurrent
                  ? 'present'
                  : (endDate && formatDate(endDate)) || 'ended at'}
              </small>
            </p>
            <ul>
              {responsibilities.length > 0 ? (
                responsibilities
                  .split('\n')
                  .filter((item) => item)
                  .map((responsibility, index) => (
                    <li key={`${id}-responsibility-${index}`}>
                      {responsibility}
                    </li>
                  ))
              ) : (
                <li>Job responsibilities</li>
              )}
            </ul>
          </Fragment>
        )
      })}
    </main>
  )
}
