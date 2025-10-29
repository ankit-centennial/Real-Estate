import floorImg from "../assets/floor_img.jpg"
const FloorImageSection = () =>{
  return(
    <section className="relative">
      <img src={floorImg} alt="" className="h-100 w-full"/>
      <h2 className="text-5xl absolute inset-0 items-center flex justify-center uppercase font-light font-serif tracking-[0.2em]">
        Floor Plans</h2>
    </section>
  )
}

export default FloorImageSection