import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import AmenitiesImageSection from './components/AmenitiesImageSection'
import AmenitiesSection from './components/AmenitiesSection'
import './App.css'

function App() {
  return (
    <div className=''>
      <TopBar></TopBar>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <IntroSection></IntroSection>
      <AmenitiesImageSection></AmenitiesImageSection>
      <AmenitiesSection></AmenitiesSection>
    </div>
  )
}

export default App
