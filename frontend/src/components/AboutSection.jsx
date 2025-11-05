import Image from "../assets/about_sec_img.jpg"
const AboutSection = () =>{
  return(
    <section className="mt-50">
    <div className="relative">
      <img src={Image} alt="" className="h-100 w-full"/>
       <h2 className="absolute flex inset-0 items-center justify-center text-5xl uppercase text-white font-light font-serif tracking-[0.2em]">
        about
      </h2>
    </div>
    <div className="flex flex-col items-center py-10 px-20 gap-4">
      <p className="text-xl">About The Real Estate</p>
      <h2 className="uppercase text-5xl">The Best of the Best</h2>
      <hr className="w-30 border"/>
      <p className="text-xl -indent-4 px-20 text-center">Meet the Team and Join Us on Social! As a resident of The Alder on Dabney, you'll be invited to weekly resident events to keep you engaged with our team and to foster a community of new and lifelong friends. </p>
      <p className="text-xl">We encourage you to visit, like, and follow our social pages for updates and events!</p>
    </div>
    </section>
  )
}

export default AboutSection