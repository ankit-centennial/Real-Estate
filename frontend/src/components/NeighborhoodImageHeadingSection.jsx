import neighborhoodImg from "../assets/neighborhood_img_head.jpg"
import ColorDivider from "./ColorDivider"
const NeighborhoodImageHeadingSection = () =>{
  return(
<>
<section className="relative w-screen h-full">
     <img src={neighborhoodImg} alt="" className="h-90 w-full object-cover"/>
      <h2 className="text-3xl lg:text-5xl md:text-4xl absolute inset-0 items-center flex justify-center uppercase font-light font-serif tracking-[0.2em] text-white">
       neighborhood
      </h2>
    </section>
    <ColorDivider></ColorDivider>
</>
  )
}

export default NeighborhoodImageHeadingSection