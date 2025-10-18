import facebookLogo from "../assets/icon-facebook.png"
import instaLogo from "../assets/icon-instagram.png"
const TopBar = () =>{
  return(
    <header className="w-full bg-[#244444] flex justify-center md:justify-end fixed h-16 z-50">
      <div className="py-6 md:pr-16 flex items-center " >
        <p className="text-white text-lg pr-2">
          999-999-9999
        </p>
          <a href="">
            <img src={facebookLogo} alt="facebook logo" className="h-10 w-10"/>
          </a>
          <a href="">
            <img src={instaLogo} alt="" className="h-10 w-11"/>
          </a>
      </div>
    </header>
  )
}

export default TopBar