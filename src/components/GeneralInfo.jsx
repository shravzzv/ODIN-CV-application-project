export default function GeneralInfo() {
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
          required
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
