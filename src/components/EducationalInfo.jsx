export default function EducationalInfo() {
  return (
    <form>
      <h2 className='form-heading'>Educational Information</h2>
      <label>
        School:{' '}
        <input
          type='text'
          name='school'
          id='school'
          placeholder='Harvard'
          required
        />
      </label>
      <label>
        Course:{' '}
        <input
          type='text'
          name='course'
          id='course'
          placeholder='medicine'
          required
        />
      </label>
      <label>
        Start date: <input type='date' name='start' id='start' required />
      </label>
      <label>
        End date:
        <input type='date' name='end' id='end' />
      </label>
      <label>
        I am currently studying here:
        <input type='checkbox' name='current' id='current' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
