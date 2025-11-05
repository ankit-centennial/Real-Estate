import SocialImg from "../assets/social_sec_img.jpg"
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
const SocialSection = () =>{
  return(
    <>
    <section className="relative w-full">
  
  <div className="absolute inset-0">
    <img
      src={SocialImg}
      alt="Background"
      className="w-full h-full object-cover brightness-75"
    />
  </div>

 
  <div className="relative flex flex-col items-center lg:items-start justify-center gap-8 px-6 sm:px-10 lg:px-20 py-20 text-center lg:text-left">
   
    <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
      <a href="#">
        <CgFacebook className="bg-white w-10 sm:w-12 h-10 sm:h-12 p-2 text-[#244444] rounded-full hover:scale-110 transition" />
      </a>
      <a href="#">
        <FaInstagram className="bg-white w-10 sm:w-12 h-10 sm:h-12 p-2 text-[#244444] rounded-full hover:scale-110 transition" />
      </a>
    </div>

    <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-serif tracking-[0.1em] max-w-3xl leading-snug">
      Designed to Elevate Your Life in Richmond.
    </h2>

    <form className="w-full    p-6 sm:p-8 ">
      <div className=" flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="bg-white p-4  focus:outline-none focus:ring-2 focus:ring-[#244444]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-white p-4  focus:outline-none focus:ring-2 focus:ring-[#244444]"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-white p-4  focus:outline-none focus:ring-2 focus:ring-[#244444]"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="bg-white p-4  focus:outline-none focus:ring-2 focus:ring-[#244444]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 mt-6 lg:justify-center">
        <input type="checkbox" className="scale-110 accent-[#244444]" />
        <p className="text-white text-sm sm:text-base">
          By submitting this form, you agree to the{" "}
          <a href="#" className="underline hover:text-gray-300">
            privacy policy
          </a>.
        </p>
      </div>

      <div className="flex justify-center lg:justify-center sm:justify-start mt-8">
        <button className="px-6 py-3 bg-amber-950 transition text-white text-lg font-light font-serif border-2 border-green-900">
          Send
        </button>
      </div>
    </form>
  </div>
</section>

    </>
  )
}

export default SocialSection