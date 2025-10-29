import SocialImg from "../assets/social_sec_img.jpg"
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
const SocialSection = () =>{
  return(
    <>
    <section className="h-200 w-full flex flex-wrap">
     
      <div className="absolute flex flex-wrap">
        <img src={SocialImg} alt="" />
      </div>
      <div className="relative inset-0 flex flex-col justify-around h-full  py-26 px-20 w-screen">
      <div className="flex gap-4 flex-wrap">
        <a href="" className=""><CgFacebook  className="bg-white w-12 h-12 p-2 text-[#244444]  rounded-full"/></a>

        <a href=""><FaInstagram className="bg-white w-12 h-12 p-2 text-[#244444]  rounded-full"/></a>
      </div>
        <h2 className="text-white text-4xl font-bold font-serif tracking-[0.2em] py-4 pr-30 ">Designed to Elevate Your Life in Richmond.</h2>

        <form action="" className="py-6 w-full">
          <div className="w-full ">
          <input type="text" placeholder="First Name" className=" bg-white border-r border-gray-800 border-l p-2"/>
          <input type="text" placeholder="Last Name" className="bg-white border-r border-gray-800 p-2"/>
          <input type="text" placeholder="Email"  className="bg-white border-r border-gray-800 p-2"/>
          <input type="text" placeholder="Phone Number" className="bg-white  p-2"/>
          <div className="flex gap-2 w-full items-center justify-center py-4 pr-6">
          <input type="checkbox" />
          <p className="text-white">By submitting this form, you agree to the <a href="" className="underline">privacy policy.</a></p>
          </div>
          </div>

         <div className="flex items-center justify-center pt-6">
          <button className="px-4 py-2 bg-amber-950 text-white border-2 border-green-900 text-xl">Send</button>
          </div>

        </form>

      </div>
      
    </section>
    </>
  )
}

export default SocialSection