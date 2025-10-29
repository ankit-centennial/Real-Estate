import swimmingPoolImg from "../assets/swimming_pool_img.jpg"
import gymImg from "../assets/gym_img.jpg"
import petAnimalsImg from "../assets/pet_img.jpg"
import ColorDivider from "./ColorDivider"
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
    <section className="flex flex-col flex-wrap pb-20 w-screen px-20">
      <div className="flex w-full justify-around py-14 text-2xl">
        <button>
        <span className="uppercase">community amenities</span>
        </button>

         <button>
        <span className="uppercase">apartment features</span>
        </button>
      </div>

      <div className="flex h-full w-155  ">
        <div className=" flex flex-col justify-around items-center flex-wrap pr-4">
          <h2 className="uppercase text-5xl py-6 text-[#244444]">Everything you need, All right here</h2>
          <p className="text-lg font-md font-light ">Our amenities are designed to redefine upscale living, offering everything you want and more right at your fingertips:</p>
          <ul className="list-disc text-lg list-inside py-8">
            {lists.map(list =>(
              <li>{list}</li>
            ))}
          </ul>
          <button className="uppercase bg-[#244444] w-70 mt-10 mr-20 py-4 text-white font-light font-serif tracking-[0.2em]">live it up</button>
        </div>

        <div className="pt-8 w-150 ml-4">
        <div className="flex gap-4 ">
          <img src={swimmingPoolImg} alt="" className="h-100"/>
          <img src={gymImg} alt="" className="h-100"/>
          <img src={petAnimalsImg} alt="" className="h-100"/>
        </div>
      </div>
      </div>
    </section>
    <ColorDivider></ColorDivider>
    </>
  )
}
export default AmenitiesSection