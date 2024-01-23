export default function WorkInfo() {
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
          required
        />
      </label>
      <textarea
        name='responsibilities'
        id='responsibilities'
        cols='30'
        rows='5'
        placeholder='Job responsibilities:'
      ></textarea>
      <label>
        Start date: <input type='date' name='start' id='start' required />
      </label>
      <label>
        End date:
        <input type='date' name='end' id='end' />
      </label>
      <label>
        I am currently working here:
        <input type='checkbox' name='current' id='current' />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
