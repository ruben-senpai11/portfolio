import Image from "next/image"
import Smiling_dev from "../assets/img/smiling_white_dev.jpg"
import White_mode_dev from "../assets/img/profile-pic_white_mode.png"
import dark_mode_dev from "../assets/img/profile-pic_Dark_mode.png"

export default function Hero (){

  return(
    <>
      <section id="hero" className="hero flex justify-between align-center gap-16 h-[100%] ">
        {/* <div className=""> */}
          <div className="description flex flex-col gap-8 justify-center align-center ">
            <h1 className="flex flex-col " >
              <span className="text-[48px]"> Hi, I'm <span className="font-mono bg-zinc-200 m-1 px-2 py-1 ">Ruben White</span></span>
              <span>22 years old & developer for 3 years</span>
              <span className="max-w-[500px] border-solid text-[20px] pt-" >I beleive in God and the ability he gave to me to make your next website <span className="font-mono bg-violet-300 m-1 p-1 " > divinely efficient</span>. </span>
            </h1>
            <p>
              Ruben White is a high skilled  
              <span> Frontend developer</span> 
            </p>
          </div>
          <div className="picture flex items-center ">
            <Image src={Smiling_dev} width={400} height={400} alt="smiling_white_dev" />
          </div>
          <div className="bar desktop"></div>
        {/* </div> */}
      </section>
    </>
  )
}