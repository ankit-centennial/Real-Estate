import neighborhoodImg from "../assets/neighborhood_img_head.jpg"
import ColorDivider from "./ColorDivider"
const NeighborhoodImageHeadingSection = () =>{
  return(
<>
<section className="relative w-full h-full">
     <img src={neighborhoodImg} alt="" className="h-90 w-full object-cover"/>
      <h2 className="absolute flex inset-0 items-center justify-center text-5xl uppercase text-white font-light font-serif tracking-[0.2em]">
       neighborhood
      </h2>
    </section>
    <ColorDivider></ColorDivider>
</>
  )
}

export default NeighborhoodImageHeadingSection