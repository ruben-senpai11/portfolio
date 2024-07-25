import Image from "next/image"
import Smiling_dev from "../assets/img/smiling_white_dev.jpg"

export default function Hero (){

  return(
    <>
      <section id="hero" className="hero flex justify-between align-center gap-16 h-[100%] ">
        {/* <div className=""> */}
          <div className="description flex flex-col gap-8 justify-center align-center ">
            <h1 className="flex flex-col " >
              <span className="text-[48px] " >Hi, I'm Alban</span>
              <span>Guess ? It means white in latin</span>
              <span>Friends call me <span className="">white_dev</span> </span>
            </h1>
            <p>
              white_dev is high a skilled  
              <span> Frontend developer</span> 
            </p>
          </div>
          <div className="picture flex items-center ">
            <Image src={Smiling_dev} width={400} height={400} alt="smiling_white_dev" />
          </div>
        {/* </div> */}
      </section>
    </>
  )
}