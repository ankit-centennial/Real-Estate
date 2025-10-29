import IntroSectionImage from "../assets/introSec-img.jpg"
import floorImg from "../assets/floor_img.jpg"
import AmenitiesSectionImage from "../assets/amenitiesSec-img.jpg"
import gymImg from "../assets/gym_img.jpg"
import bedRoomImg from "../assets/bedroom_img.jpg"
import swimmingPoolImg from "../assets/swimming_pool_img.jpg"
import neighborhoodImg from "../assets/neighborhood_img_head.jpg"
import petAnimalsImg from "../assets/pet_img.jpg"
import galleryHeadSecImg from "../assets/gallery_heading_sec_img.jpg"
const GallerySection = ()=>{
  const galleryImages = [IntroSectionImage,petAnimalsImg,neighborhoodImg,galleryHeadSecImg,floorImg,gymImg,bedRoomImg,swimmingPoolImg,AmenitiesSectionImage]
  return(
    <>
    <section className="w-full px-6 py-16 items-center flex flex-col">
      <div className="text-center flex flex-wrap px-20">
        <h2 className="text-5xl font-light font-serif tracking-[0.2em] uppercase text-[#244444]">This Is Life at The Alder on Dabney</h2>
      </div>
      <hr  className="w-30 border border-[#244444] my-6"/>
      <div className="columns-1 sm:columns-2 md:columns-3  py-10">
        {galleryImages.map(image=>
          <img src={image} alt="" className="w-full h-auto object-cover py-2"/>
        )}
       
      </div>
      <button className="uppercase py-4 bg-[#244444] text-white px-10 font-light font-serif tracking-[0.2em]" >
        view more
      </button>
    </section>
    </>
  )
}
export default GallerySection