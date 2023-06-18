import { Fade } from 'react-awesome-reveal'

function Header() {
  return (
    <header>
      <Fade cascade direction={'left'}>
        <h1>Austin Lance</h1>
        <h4>—— Full Stack Engineer ——</h4>
      </Fade>
      <div>
        <h6>Coded in Visual Studio Code and built with React.js, Typescript and Bootstrap CSS, deployed with Vercel.</h6>
      </div>
    </header>
  )
}

export default Header
