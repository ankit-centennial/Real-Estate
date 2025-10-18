import IntroSectionImage from "../assets/introSec-img.jpg"
import ColorDivider from "./ColorDivider"
const IntroSection = () =>{
  return (
    <>
 <section className="flex items-center  flex-wrap  md:flex-nowrap lg:flex-nowrap mb-8">

  <div  className="lg:w-7.4xl  pl-8 pt-6 md:2xl">
  <h2 className="lg:text-4xl text-4xl pl-6 uppercase tracking-[0.2em] font-serif md:text-2xl text-[#244444]">
    A Unique Fusion of Convenience and Luxury. Plant Your Roots at The Alder on Dabney. Lease Today!
  </h2>

  <hr  className="w-30 border ml-6 mt-4 border-[#244444]"/>

  <button className="bg-[#244444] px-12 py-2 text-sm uppercase font-serif text-white  font-thin ml-4 mt-6">
    View What's Inside
  </button>
  </div>

  <div className="lg:pt-12 lg:mb-4 py-6   w-full flex  justify-center px-4 lg:pr-8  lg:h-100  ">
    <img src={IntroSectionImage} alt="" className="md:w-full md:h-full object-cover"/>
  </div>

 </section>
 
 <ColorDivider></ColorDivider>
 </>
  )
}
export default IntroSection   
