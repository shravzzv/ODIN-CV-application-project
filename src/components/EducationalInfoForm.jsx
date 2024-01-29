/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'

export default function EducationalInfoForm({ data, updateData }) {
  const handleChange = (e, id) => {
    const { name, value, type, checked } = e.target

    // Update the specific entry in the data array
    const updatedData = data.map((info) =>
      info.id === id
        ? {
            ...info,
            [name]: type === 'checkbox' ? checked : value,
          }
        : info
    )

    // Call the updateData function with the updated array
    updateData(updatedData)
  }

  const handleAddForm = () => {
    const newEducation = {
      id: uuidv4(),
      school: '',
      course: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
    }

    // Add the new form to the data array
    updateData([...data, newEducation])
  }

  const handleRemoveForm = (id) => {
    // Remove the form with the given id from the data array
    const updatedData = data.filter((info) => info.id !== id)
    updateData(updatedData)
  }

  return (
    <>
      {data.map((info) => {
        const { id, school, course, startDate, endDate, isCurrent } = info

        return (
          <form key={id}>
            <h2 className='form-heading'>Educational Information</h2>
            <label>
              School:
              <input
                type='text'
                name='school'
                id='school'
                placeholder='Harvard'
                value={school}
                onChange={(e) => handleChange(e, id)}
                required
              />
            </label>
            <label>
              Course:
              <input
                type='text'
                name='course'
                id='course'
                placeholder='medicine'
                value={course}
                onChange={(e) => handleChange(e, id)}
                required
              />
            </label>
            <label>
              Start date:{' '}
              <input
                type='date'
                name='startDate'
                value={startDate}
                onChange={(e) => handleChange(e, id)}
                required
              />
            </label>
            <label>
              End date:
              <input
                type='date'
                name='endDate'
                value={endDate}
                onChange={(e) => handleChange(e, id)}
              />
            </label>
            <label>
              I am currently studying here:
              <input
                type='checkbox'
                name='isCurrent'
                checked={isCurrent}
                onChange={(e) => handleChange(e, id)}
              />
            </label>
            <button type='button' onClick={() => handleRemoveForm(id)}>
              Remove
            </button>
          </form>
        )
      })}
      <button type='button' onClick={handleAddForm}>
        Add {data.length > 0 && 'more'} education
      </button>
    </>
  )
}
