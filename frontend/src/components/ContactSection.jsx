import Image from "../assets/contact_sec_img.jpg"
const ContactSection = () =>{
  return(
    <section className="mt-50 ">
      <div className="relative">
          <img src={Image} alt="" className="h-100 w-full"/>
           <h2 className="absolute flex inset-0 items-center justify-center text-5xl uppercase text-white font-light font-serif tracking-[0.2em]">
            contact
          </h2>
        </div>
        <div className="w-1/2 px-25 items-center flex flex-col text-center ">
          <h2 className="uppercase text-4xl py-6 text-[#244444] tracking-[0.2em]">Send us a message!</h2>
          <hr className="w-30 border border-[#244444]"/>
          <form action="" className="flex flex-col gap-4 py-8 ">
            <input type="text" placeholder="First Name" className="border p-2 text-md"/>
            <input type="text" placeholder="Last Name" className="border p-2 text-md"/>
            <input type="text" placeholder="Email" className="border p-2 text-md"/>
            <input type="number" placeholder="Phone Number" className="border p-2 text-md"/>
            <textarea name="" id="" placeholder="Message" className="border p-2 text-md"></textarea>

            <div className="flex gap-1 w-full">
            <input type="checkbox" />
            <p>By submitting this form, you agree to the privacy policy.</p>
            </div>
        
          
            <button className="p-2 bg-amber-800 w-30 text-white text-xl border-green-950 border-2 ">Send</button>
           
          </form>
        </div>
    </section>
  )
}

export default ContactSection