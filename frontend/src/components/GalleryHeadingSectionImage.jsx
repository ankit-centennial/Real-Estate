import galleryHeadSecImg from "../assets/gallery_heading_sec_img.jpg"
import ColorDivider from "./ColorDivider"
const GalleryHeadingSectionImage = () =>{
  return (
    <>
    <section className="w-screen relative ">
      <img src={galleryHeadSecImg} className="h-100 w-full"/>
      <h2 className="uppercase absolute inset-0 justify-center flex items-center text-white text-3xl lg:text-5xl md:text-4xlfont-light font-serif tracking-[0.2em]">gallery</h2>
    </section>
    <ColorDivider></ColorDivider>
    </>
  )
}

export default GalleryHeadingSectionImage