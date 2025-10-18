import swimmingPoolImg from "../assets/swimming_pool_img.jpg"
import gymImg from "../assets/gym_img.jpg"
import petAnimalsImg from "../assets/pet_img.jpg"
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
    <section className="flex flex-col flex-wrap ">
      <div className="flex w-full justify-around py-14 text-2xl">
        <button>
        <span className="uppercase">community amenities</span>
        </button>

         <button>
        <span className="uppercase">apartment features</span>
        </button>
      </div>

      <div className="flex h-full w-195 px-14">
        <div className="pr-24">
          <h2 className="uppercase text-5xl py-6">Everything you need, All right here</h2>
          <p className="text-lg font-sm">Our amenities are designed to redefine upscale living, offering everything you want and more right at your fingertips:</p>
          <ul className="list-disc text-lg list-inside">
            {lists.map(list =>(
              <li>{list}</li>
            ))}
          </ul>
          <button className="uppercase">live it up</button>
        </div>

        <div className="">
        <div className="flex gap-3">
          <img src={swimmingPoolImg} alt="" className="h-90"/>
          <img src={gymImg} alt="" className="h-90"/>
          <img src={petAnimalsImg} alt="" className="h-90"/>
        </div>
      </div>
      </div>
    </section>
  )
}
export default AmenitiesSection