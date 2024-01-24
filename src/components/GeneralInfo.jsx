/* eslint-disable react/prop-types */
export default function GeneralInfo({ data, updateData }) {
  const { name, email, phone } = data

  const handleChange = (e) => {
    const { name, value } = e.target
    updateData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <form>
      <h2 className='form-heading'>General Information</h2>
      <label>
        Name:{' '}
        <input
          type='text'
          name='name'
          id='name'
          placeholder='John Doe'
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:{' '}
        <input
          type='email'
          name='email'
          id='email'
          placeholder='johndoe@mail.com'
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:{' '}
        <input
          type='tel'
          name='phone'
          id='phone'
          placeholder='9123456789'
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
    </form>
  )
}
