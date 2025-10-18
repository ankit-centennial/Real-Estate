import ColorDivider from "./ColorDivider"
const HeroSection = () =>{
  return(
    <>
  <section className=" relative mr-10 ml-10  border overflow-hidden h-screen ">
 <iframe
  className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"
  src="https://www.youtube.com/embed/-Wr1PMsKzGQ?autoplay=1&mute=1&controls=0&loop=1&playlist=-Wr1PMsKzGQ&modestbranding=1&showinfo=0&rel=0"
  title="YouTube video background"
  allow="autoplay; fullscreen"
/> 
</section>
<ColorDivider></ColorDivider>
</>
  )
}

export default HeroSection