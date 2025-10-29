import diningImg from "../assets/dining_img.jpg"
import shoppingImg from "../assets/shopping_img.jpg"
 import entertainmentImg from "../assets/entertainment _img.jpg"
import communityImg from "../assets/community_img.jpg"

const NeighborhoodSection = () =>{
  const images = [diningImg,shoppingImg,entertainmentImg,communityImg]
  return(
    <section className="px-16 h-full flex py-20 items-center">
     <div className="w-full flex flex-col h-full justify-between gap-6  px-6">
      <h2 className="uppercase text-4xl font-light font-serif tracking-[0.2em] text-[#244444]">
        THE BEST PLACE TO LIVE, WORK, AND PLAY
      </h2>

       <hr  className="w-30 border  border-[#244444] "/>

    <div className="text-lg flex flex-col gap-2 ">
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
      <button className="bg-[#244444] text-white  font-light font-serif tracking-[0.1em] py-3 w-80">Explore The Neighborhood</button>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map(image =>(
        <img src={image} alt="" className="w-150 h-90 object-cover"/>
      ))}
     </div>
    </section>
  )
}
export default NeighborhoodSection