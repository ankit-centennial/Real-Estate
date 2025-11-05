import Image from "../assets/about_sec_img.jpg"
import ColorDivider from "./ColorDivider"
const AboutSection = () =>{
  return(
   <section className="mt-20">
 
  <div className="relative">
    <img
      src={Image}
      alt="About Banner"
      className="w-full h-60 sm:h-80 md:h-[450px] object-cover"
    />
    <h2 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl uppercase text-white font-light font-serif tracking-[0.2em] bg-black/40">
      About
    </h2>
  </div>

  <ColorDivider></ColorDivider>

  <div className="flex flex-col items-center py-10 px-4 sm:px-10 md:px-20 lg:px-40 gap-4 text-center">
    <p className="text-lg sm:text-xl text-[#244444]">
      About The Real Estate
    </p>

    <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl text-[#244444]">
      The Best of the Best
    </h2>

    <hr className="w-24 sm:w-32 border border-[#244444]" />

    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 sm:px-8 md:px-16">
      Meet the Team and Join Us on Social! As a resident of The Alder on Dabney,
      you'll be invited to weekly resident events to keep you engaged with our
      team and to foster a community of new and lifelong friends.
    </p>

    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
      We encourage you to visit, like, and follow our social pages for updates and events!
    </p>
  </div>
</section>

  )
}

export default AboutSection