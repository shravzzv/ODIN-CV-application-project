/* eslint-disable react/prop-types */
export default function WorkInfoForm({ data, updateData }) {
  const { company, position, responsibilities, startDate, endDate, isCurrent } =
    data

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    updateData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <form>
      <h2 className='form-heading'>Work Experience</h2>
      <label>
        Company:
        <input
          type='text'
          name='company'
          id='company'
          placeholder='ACME Inc.'
          value={company}
          onChange={handleChange}
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
          onChange={handleChange}
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
        onChange={handleChange}
      ></textarea>
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
        I am currently working here:
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
