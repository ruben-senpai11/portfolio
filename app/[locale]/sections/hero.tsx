import Image from "next/image"
import smiling_dev from "../assets/img/smiling_white_dev.jpg"
import white_mode_pic from "../assets/img/ruben-honfovou.png"
import dark_mode_dev from "../assets/img/profile-pic_Dark_mode.png"
import { useTranslations } from "next-intl";

export default function Hero (){

  const h = useTranslations('HomePage.hero');

  return(
    <>
      <section id="hero" className="hero flex justify-between align-center gap-16 h-[100%] ">
        {/* <div className=""> */}
          <div className="description flex flex-col gap-8 justify-center align-center ">
            <h1 className="flex flex-col " >
              <span className="text-[48px]"> 
                {(h('title'))} <span className="font-mono bg-zinc-200 m-1 px-2 py-1 bg-text ">Ruben White</span> 
              </span>
              <span>{(h('title-2'))}</span>
              {/* <span>22 years old & developer for 3 years</span> */}
              <span className="max-w-[500px] border-solid text-[20px] pt-" >{(h('description'))}<span className="font-mono bg-purple-400 m-1 p-1 bg-text-colored " >{(h('description-colored'))}</span>. </span>
            </h1>
            <p>
            {(h('text'))} 
              {/* <span> Frontend developer</span>  */}
            </p>
          </div>
          <div className="picture flex items-center ">
            {/* <div className="bar desktop"></div> */}
            <Image src={white_mode_pic} width={400} height={400} alt="smiling_white_dev" priority />
          </div>
        {/* </div> */}
      </section>
    </>
  )
}