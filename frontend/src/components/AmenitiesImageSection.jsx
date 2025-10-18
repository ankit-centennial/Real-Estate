import AmenitiesSectionImage from "../assets/amenitiesSec-img.jpg"
import ColorDivider from "./ColorDivider"
const AmenitiesImageSection = () =>{
  return (
    <>
    <section className="relative w-full h-full">
     <img src={AmenitiesSectionImage} alt="" />
      <h2 className="absolute flex inset-0 items-center justify-center text-5xl uppercase text-white font-light font-serif tracking-[0.2em]">
        Amenities
      </h2>
    </section>
    <ColorDivider></ColorDivider>
    </>
  )
}
export default AmenitiesImageSection