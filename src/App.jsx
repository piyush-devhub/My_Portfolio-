import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='wrapper'>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App