/* eslint-disable react/prop-types */
export default function EducationalInfoForm({ data, updateData }) {
  const { school, course, startDate, endDate, isCurrent } = data

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    updateData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <form>
      <h2 className='form-heading'>Educational Information</h2>
      <label>
        School:
        <input
          type='text'
          name='school'
          id='school'
          placeholder='Harvard'
          value={school}
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Start date:{' '}
        <input
          type='date'
          name='startDate'
          value={startDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        End date:
        <input
          type='date'
          name='endDate'
          value={endDate}
          onChange={handleChange}
        />
      </label>
      <label>
        I am currently studying here:
        <input
          type='checkbox'
          name='isCurrent'
          checked={isCurrent}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}
