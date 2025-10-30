import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () =>{
  const [isMenuOpen,isSetMenuOpen] = useState(false)
 
  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden"; // disable page scroll
  } else {
    document.body.style.overflow = "auto"; // enable again
  }
}, [isMenuOpen]);

  return (
    <div className="">
<nav className={`flex justify-between py-4 px-4 md:px-12 lg:px-16 w-screen  pt-20 `}>
  <button className="flex items-center  gap-1 "
  onClick={()=>isSetMenuOpen(!isMenuOpen)}
  > 
  {isMenuOpen? <AiOutlineClose className="text-4xl font-bold"/> :
    <GiHamburgerMenu className="text-4xl font-bold"/>
  }
   <span>MENU</span>

  </button>
  <div className="flex gap-4 ">
    <button className="bg-[#244444] px-10 py-3 text-white">Book Tour</button>
    <button className="bg-[#244444] px-10 py-3 text-white">Apply Now</button>
  </div>
</nav>

<nav className={` bg-white/90 py-16 fixed  ${isMenuOpen ? "translate-x-0 h-screen  w-full z-40" : "-translate-x-full hidden " } transition-transform -duration-300 overflow-scroll  backdrop-blur-[1px]`}>
  <ul className="px-12 flex flex-col justify-between h-full text-md font-light gap-12">
    <li><span className="p-4">ABOUT</span></li>
    <li><span className="p-4">AVAILABILITY</span></li>
    <li><span className="p-4">GALLERY</span></li>
    <li><span className="p-4">TOURS</span></li>

    <li><span className="p-4">
     <Link to="/amenities"> AMENITIES </Link>
      </span></li>

    <li><span className="p-4">NEIGHBORHOOD</span></li>
    <li><span className="p-4">PET-FRIENDLY</span></li>
    <li><span className="p-4">SOCIAL</span></li>
    <li><span className="p-4">REVIEWS</span></li>
    <li><span className="p-4">RESIDENTS</span></li>
    <li><span className="p-4">CONTACT</span></li>
    <li><span className="p-4">VIP RESIDENT</span></li>
  </ul>
</nav>
</div>
  )
}

export default NavBar
