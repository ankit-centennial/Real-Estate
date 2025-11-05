import {Routes,Route} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import AmenitesSection from "../components/AmenitiesSection"
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import FloorSection from "../components/FloorSection";
import GalleryHeadingSectionImage from "../components/GalleryHeadingSectionImage";
import GallerySection from "../components/GallerySection";
import NeighborhoodSection from "../components/NeighborhoodSection";
import SocialSection from "../components/SocialSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
const AppRoute = () =>{
  return(
<Routes>
  <Route path="/" element={<MainLayout/>}>
  <Route index element={
    <>
    <HeroSection />
    <IntroSection />
    <AmenitesSection/>
    <FloorSection />
    <GalleryHeadingSectionImage />
    <GallerySection />
    <NeighborhoodSection />
   <SocialSection />
    </>
  }></Route>

  <Route path="/amenities" element={
    <>
    <AmenitesSection/>
    <SocialSection/>
    </>
    }></Route>

    <Route path="/about" element={
      <>
      <AboutSection/>
      </>
    }></Route>

    <Route path="/neighborhood" element={<NeighborhoodSection/>}></Route>
     <Route path="/contact" element={<ContactSection/>}></Route>

  </Route>
</Routes>
  )
}

export default AppRoute