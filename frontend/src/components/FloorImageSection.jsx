import floorImg from "../assets/floor_img.jpg"
const FloorImageSection = () =>{
  return(
    <section className="relative w-screen">
      <img src={floorImg} alt="" className="h-100 w-full "/>
      <h2 className="text-3xl lg:text-5xl md:text-4xl absolute inset-0 items-center flex justify-center uppercase font-light font-serif tracking-[0.2em]">
        Floor Plans</h2>
    </section>
  )
}

export default FloorImageSection