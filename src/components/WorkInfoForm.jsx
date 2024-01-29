/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'

export default function WorkInfoForm({ data, updateData }) {
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
    const newWork = {
      id: uuidv4(),
      company: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
      isCurrent: false,
    }

    // Add the new form to the data array
    updateData([...data, newWork])
  }

  const handleRemoveForm = (id) => {
    // Remove the form with the given id from the data array
    const updatedData = data.filter((info) => info.id !== id)
    updateData(updatedData)
  }

  return (
    <>
      {data.map((info) => {
        const {
          id,
          company,
          position,
          responsibilities,
          startDate,
          endDate,
          isCurrent,
        } = info

        return (
          <form key={id} className='scale-in-center'>
            <h2 className='form-heading'>Work Experience</h2>
            <label>
              Company:
              <input
                type='text'
                name='company'
                id='company'
                placeholder='ACME Inc.'
                value={company}
                onChange={(e) => handleChange(e, id)}
                required
              />
            </label>
            <label>
              Position:
              <input
                type='text'
                name='position'
                id='position'
                placeholder='Frontend developer'
                value={position}
                onChange={(e) => handleChange(e, id)}
                required
              />
            </label>
            <textarea
              name='responsibilities'
              id='responsibilities'
              cols='30'
              rows='5'
              placeholder='Job responsibilities: (Separate using a new line)'
              value={responsibilities}
              onChange={(e) => handleChange(e, id)}
            ></textarea>
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
              I am currently working here:
              <input
                type='checkbox'
                name='isCurrent'
                checked={isCurrent}
                onChange={(e) => handleChange(e, id)}
              />
            </label>
            <button
              type='button'
              className='removeBtn'
              onClick={() => handleRemoveForm(id)}
            >
              Remove
            </button>
          </form>
        )
      })}
      <button type='button' onClick={handleAddForm}>
        Add {data.length > 0 && 'more'} work
      </button>
    </>
  )
}
