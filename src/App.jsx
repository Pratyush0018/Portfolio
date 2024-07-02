import './App.css'
import Navbar from './components/navbabar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'


function App() {
  

  return (
    <>
    <Cursor/>
    <section className='Homepage'>
      <Navbar/>
      <Hero/>
    </section>

    <section className='Services'>
      <Parallax  type="services"/>
    </section>
    
    <section> <Services/> </section>

    <section className='Portfolio'><Parallax  type="portfolio"/>
     </section>
    
    <Portfolio/>

    <section className='contact'>
      <Contact/>
    </section>

    

    </>
  )
}

export default App
