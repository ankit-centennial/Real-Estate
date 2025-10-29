import bedRoomImg from "../assets/bedroom_img.jpg"
import FloorImageSection from "./FloorImageSection"
const FloorSection = () =>{
  return (
    <>
    <FloorImageSection></FloorImageSection>
   <section className="h-screen flex justify-center px-10 py-10 flex-wrap lg:flex-nowrap">
    <div className="py-10 w-190">
      <img src={bedRoomImg} alt="" className="h-90 w-160"/>
    </div>

    <div className="px-15 flex-wrap w-170 flex flex-col justify-between h-full">
      <h2 className="uppercase text-3xl font-serif tracking-[0.2em]  text-[#244444]">Tranquility inside. City adventures outside. Discover both at The Alder on Dabney.</h2>
      <hr  className="w-30 border  border-[#244444] "/>
      <h2 className="text-xl font-serif font-light">Elevate your Everyday.</h2>
      <ul className="text-lg font-bold ">
        <li>Endless Options</li>
        <li>Spacious Layouts</li>
        <li>Incredible Views</li>
        <li>Chef Style Kitchens</li>
        <li>Modern Plank Flooring</li>
      </ul>
      <button className="uppercase bg-[#244444] text-white  py-3 block w-80">find your new home</button>
    </div>
   </section>
    </>
  )
}

export default FloorSection