import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import AmenitiesImageSection from './components/AmenitiesImageSection'
import AmenitiesSection from './components/AmenitiesSection'
import FloorSection from './components/FloorSection'
import GalleryHeadingSectionImage from './components/GalleryHeadingSectionImage'
import GallerySection from './components/GallerySection'
import NeighborhoodImageHeadingSection from './components/NeighborhoodImageHeadingSection'
import NeighborhoodSection from './components/NeighborhoodSection'
import SocialSection from './components/SocialSection'
import FooterSection from './components/FooterSection'
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
      <FloorSection></FloorSection>
      <GalleryHeadingSectionImage></GalleryHeadingSectionImage>
      <GallerySection></GallerySection>
      <NeighborhoodImageHeadingSection/>
      <NeighborhoodSection />
      <SocialSection></SocialSection>
      <FooterSection></FooterSection>
    </div>
  )
}

export default App
