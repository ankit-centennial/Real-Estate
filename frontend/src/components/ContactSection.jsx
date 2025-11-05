import Image from "../assets/contact_sec_img.jpg"
import ColorDivider from "./ColorDivider"
const ContactSection = () =>{
  return(
   <section className="mt-20">
  <div className="relative">
    <img src={Image} alt="Contact Banner" className="w-full h-60 sm:h-80 md:h-[450px] object-cover" />
    <h2 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl uppercase text-white font-light font-serif tracking-[0.2em] bg-black/40">
      Contact
    </h2>
  </div>
  <ColorDivider></ColorDivider>

  <div className="w-full md:w-2/3 lg:w-1/3  px-4 sm:px-8 py-10 flex flex-col items-center text-center">
    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl py-4 text-[#244444] tracking-[0.2em]">
      Send us a message!
    </h2>
    <hr className="w-24 border border-[#244444] mb-6" />

    <form className="flex flex-col gap-4 w-full">
      <input type="text" placeholder="First Name" className="border p-2 text-md w-full" />
      <input type="text" placeholder="Last Name" className="border p-2 text-md w-full" />
      <input type="email" placeholder="Email" className="border p-2 text-md w-full" />
      <input type="tel" placeholder="Phone Number" className="border p-2 text-md w-full" />
      <textarea placeholder="Message" rows="4" className="border p-2 text-md w-full"></textarea>

      <div className="flex items-start gap-2 text-left">
        <input type="checkbox" className="mt-1" />
        <p className="text-sm text-gray-700">By submitting this form, you agree to the privacy policy.</p>
      </div>

      <button className="p-3 bg-amber-800 text-white text-lg font-medium border-2 border-green-950 hover:bg-amber-700 transition sm:w-40 w-35 ">
        Send
      </button>
    </form>
  </div>
</section>

  )
}

export default ContactSection