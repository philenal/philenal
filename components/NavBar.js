import Link from 'next/link'
import { Navbar } from './styles'

export default function NavBar(props) {
  const { homeRef, aboutRef, projectsRef, artRef } = props;
  const executeScroll = (ref) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({
      behavior: 'smooth'
    }) 
  }   
  return (
    <Navbar>
        <p onClick={() => executeScroll(homeRef)}>home</p>
        <p onClick={() => executeScroll(aboutRef)}>about</p>
        <p onClick={() => executeScroll(projectsRef)}>projects</p>
        <p onClick={() => executeScroll(artRef)}>art</p>
        <a href={`/resume.pdf`}>resume</a>
    </Navbar>
  )
}