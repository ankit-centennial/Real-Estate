import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
const FooterSection = () =>{
  return(
    <section className="bg-[#244444] text-white py-12 px-6 sm:px-10 lg:px-20 mt-10 lg:mt-20">
  <div className="flex flex-col lg:flex-row justify-between gap-10 text-center lg:text-left">
    
    {/* ---- Address / Contact Info ---- */}
    <div>
      <h2 className="text-2xl font-semibold pb-4">Real Estate</h2>
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        <a href="#" className="hover:underline">2001 Dabney Road</a>
        <a href="#" className="hover:underline">Richmond, VA 23230</a>
        <a href="tel:0809010202" className="hover:underline">0809010202</a>
        <a href="mailto:info@example.com" className="hover:underline">Email</a>
      </div>
    </div>

    {/* ---- Office Hours ---- */}
    <div>
      <h2 className="text-2xl font-semibold pb-4">Office Hours</h2>
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        <span>Monday - Friday: 9:00am - 6:00pm</span>
        <span>Saturday: 10:00am - 5:00pm</span>
        <span>Sunday: Closed</span>
      </div>
    </div>

    {/* ---- Social & Legal ---- */}
    <div className="flex flex-col items-center lg:items-end gap-4">
      {/* Social Icons */}
      <div className="flex gap-4 justify-center">
        <a href="#" aria-label="Facebook">
          <CgFacebook className="bg-white w-10 sm:w-12 h-10 sm:h-12 p-2 text-[#244444] rounded-full hover:scale-110 transition" />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram className="bg-white w-10 sm:w-12 h-10 sm:h-12 p-2 text-[#244444] rounded-full hover:scale-110 transition" />
        </a>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Accessibility Statement</a>
        <span className="text-gray-200 text-xs sm:text-sm">
          © 2025 The Real Estate. All rights reserved.
        </span>
      </div>
    </div>
  </div>
</section>

  )
}
export default FooterSection