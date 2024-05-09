import Image from 'next/image'
import Link from 'next/link'
import About from './pages/about/About'
import Intro from './pages/intro/Intro'
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'
import Skill from './pages/skill/Skill'
import Motto from './components/Motto'
// import Music from './components/Music'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Intro />
      <Motto />
      <About />
      <Skill />
      <Work />
      <Contact />
    </main>
  )
}
