import '../styles/Controls.css'

export default function Controls() {
  const handlePrint = (e) => {
    e.preventDefault()
    window.print()
  }

  return (
    <div className='controls'>
      <p>
        Welcome to the CV Creator! Craft your perfect resume with ease. Showcase
        your skills and land that dream job!
      </p>
      <a
        href='https://github.com/shravzzv/ODIN-CV-application-project'
        target='_blank'
        rel='noreferrer'
      >
        Give this project a star on GitHub
      </a>
      <button onClick={handlePrint} className='printBtn'>
        Print CV
      </button>
    </div>
  )
}
