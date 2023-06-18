import { Fade } from 'react-awesome-reveal'

function Header() {
  return (
    <header>
      <Fade cascade direction={'left'}>
        <h1>Austin Lance</h1>
      </Fade>
      <Fade delay={200} direction={'left'}>
        <h4>Full Stack Engineer</h4>
      </Fade>
    </header>
  )
}

export default Header
