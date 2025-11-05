import swimmingPoolImg from "../assets/swimming_pool_img.jpg"
import gymImg from "../assets/gym_img.jpg"
import petAnimalsImg from "../assets/pet_img.jpg"
import ColorDivider from "./ColorDivider"
import AmenitiesImageSection from "./AmenitiesImageSection"
const AmenitiesSection = () =>{

  const lists = ["Great Location - Minutes to Scott's Addition and The Fan/Carytown",
"Elevated Year-Round Swimming Pool w/ Tanning Deck",
"Private Poolside Cabanas",
"24/7 Fitness Center",
"Grilling Stations",
"Fire Pit",
"2-Story Resident Lounge",
"Sky Lounge w/ RVA Skyline Views",
"Attached Garage Parking*",
"EV Charging Stations*",
"Bicycle Storage",
"Pet Friendly",
"Bark Park & Pet Spa",
"Secure Package Acceptance",
"Planned Social Events",
"Controlled Access",
"Keyless Entry",
"Professional Onsite Management",
"24/7 Emergency Maintenance"]

  return(
    <>
    <AmenitiesImageSection></AmenitiesImageSection>
    <section className="flex flex-col  pb-20 w-full px-6 sm:px-10 lg:px-20">
      <div className="flex flex-wrap justify-center lg:justify-around gap-4 py-10 text-xl sm:text-2xl ">
        <button>
        <span className="uppercase">community amenities</span>
        </button>

         <button>
        <span className="uppercase">apartment features</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row   gap-10 ">
        <div className=" flex flex-col justify-center items-center lg:items-start text-center lg:text-start lg:w-1/3 lg:mr-12">
          <h2 className="uppercase text-3xl sm:text-4xl lg:text-5xl py-4 text-[#244444]">Everything you need, All right here</h2>
          <p className="text-base sm:text-lg font-light leading-relaxed max-w-xl">Our amenities are designed to redefine upscale living, offering everything you want and more right at your fingertips:</p>
          <ul className="list-disc text-base sm:text-lg list-inside py-6 space-y-2 flex-wrap">
            {lists.map(list =>(
              <li>{list}</li>
            ))}
          </ul>
          <button className="uppercase bg-[#244444] hover:bg-[#2c5b5b] transition w-48 sm:w-56 mt-6 py-3 text-white font-light font-serif tracking-[0.2em]  shadow-md">live it up</button>
        </div>

       
        <div className="flex flex-wrap md:flex-nowrap justify-center  gap-4 lg:w-1/2">
          <img src={swimmingPoolImg} alt="" className="w-64 sm:w-72 lg:w-56 h-auto lg:h-100 shadow-md object-cover"/>
          <img src={gymImg} alt="" className="w-64 sm:w-72 lg:w-56 h-auto lg:h-100 shadow-md object-cover"/>
          <img src={petAnimalsImg} alt="" className="w-64 sm:w-72 lg:w-56 h-auto lg:h-100 shadow-md object-cover"/>
        </div>
      </div>
    </section>
    <ColorDivider></ColorDivider>
    </>
  )
}
export default AmenitiesSection