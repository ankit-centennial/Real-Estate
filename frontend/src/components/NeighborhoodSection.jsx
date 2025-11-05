import diningImg from "../assets/dining_img.jpg"
import shoppingImg from "../assets/shopping_img.jpg"
import entertainmentImg from "../assets/entertainment _img.jpg"
import communityImg from "../assets/community_img.jpg"
import NeighborhoodImageHeadingSection from "./NeighborhoodImageHeadingSection"

const NeighborhoodSection = () =>{
  const images = [diningImg,shoppingImg,entertainmentImg,communityImg]
  return(
    <>
    <NeighborhoodImageHeadingSection />
   <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 sm:px-10 lg:px-20 py-16">
  <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6 text-center lg:text-left">
    <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-light font-serif tracking-[0.2em] text-[#244444]">
      THE BEST PLACE TO LIVE, WORK, AND PLAY
    </h2>

    <hr className="w-20 sm:w-28 border border-[#244444] mx-auto lg:mx-0" />

    <div className="text-base sm:text-lg flex flex-col gap-4 leading-relaxed text-[#333]">
      <p>
        Living near Scott's Addition Historic District and Carytown offers residents a blend of convenience and excitement. This prime location ensures that all necessities and luxuries are within easy reach, whether by foot, bike, or a short drive. The area is designed to simplify daily life, making accessing essential amenities and indulging in various activities effortless.
      </p>

      <p>
        Our location proves ideal for those focusing on career or education with straightforward commutes to major employment centers, universities, colleges, and schools. This proximity ensures that residents spend less time commuting and more time enjoying what the neighborhood and RVA as a whole have to offer.
      </p>

      <p>
        The Alder on Dabney provides a vibrant living experience where residents can seamlessly balance work, education, adventure, and leisure, all within a dynamic urban environment.
      </p>
    </div>

    <button className="bg-[#244444] hover:bg-[#2c5b5b] transition text-white font-light font-serif tracking-[0.1em] py-3 w-60 sm:w-72 mx-auto lg:mx-0  shadow-md">
      Explore The Neighborhood
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-1/2">
    {images.map((image, i) => (
      <img
        key={i}
        src={image}
        alt={`Neighborhood ${i + 1}`}
        className="w-full h-64 sm:h-72 lg:h-80 object-cover  shadow-md"
      />
    ))}
  </div>
</section>

    </>
  )
}
export default NeighborhoodSection