import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
const FooterSection = () =>{
  return(
    <section className="h-full py-20  bg-[#244444] lg:mt-20 flex justify-around ">
     <div className="text-white">
      <h2 className="text-2xl pb-4">Real Estate</h2>
      
      <div className="flex flex-col gap-2">
        <a href="">
          <span>2001 Dabney Road</span>
          </a>
          <a href="">
            <span>Richmond, VA 23230</span>
          </a>
          <a href="">
            <span>0809010202</span>
          </a>
          <a href="">
          <span>Email</span>
        </a>
      </div>
     </div>

     <div className="text-white ">
      <h2 className="pb-4 text-2xl">Office Hours</h2>
      <div className="flex flex-col gap-3">
        <span>Monday - Friday: 9:00am - 6:00pm</span>
        <span>Saturday: 10:00am - 5:00pm</span>
        <span>Sunday: Closed</span>
      </div>
      </div>
      
      <div>
       <div className="flex gap-4 flex-wrap ">
        <a href="" className=""><CgFacebook  className="bg-white w-12 h-12 p-2 text-[#244444]  rounded-full"/></a>

        <a href=""><FaInstagram className="bg-white w-12 h-12 p-2 text-[#244444]  rounded-full"/></a>
      </div>
      <div className="flex flex-col text-white gap-3 pt-4">
        <a href="">Privacy Policy</a>
        <a href="">Accessibility Statement</a>
        <span>Copyright © 2025 The Real Estate</span>
      </div>
     </div>
    </section>
  )
}
export default FooterSection