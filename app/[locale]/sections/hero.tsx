import Image from "next/image"
import smiling_dev from "../assets/img/smiling_white_dev.jpg"
import white_mode_pic from "../assets/img/profile-pic-yellow.png"
import dark_mode_dev from "../assets/img/profile-pic_Dark_mode.png"
import { useTranslations } from "next-intl";
import ContactForm from "../components/contactForm";

// import ContactForm from "../components/emailForm";


export default function Hero() {

  const h = useTranslations('HomePage.hero');

  return (
    <>
      <section id="hero" className="hero flex justify-between align-center gap-32 h-[100%] ">
        {/* <div className=""> */}
        <div className="description flex flex-col gap-4 justify-center align-center w-100 max-w-[100%]: ">
          <h1 className="flex flex-col " >
            <span className="text-[48px] font-normal">
              {(h('title'))}
              <span className="font-mono font-semibold m-1 leading-[1.2] text-gradient ">&nbsp;UIX <span className="text-nowrapp">developer <span className="font-sans font-extrabold">{"</>"}</span> </span></span>
            </span>
            {/* <span>{(h('title-2'))}</span> */}
          </h1>
          <h2 className="max-w-[550px]">
            <span className=" border-solid text-[18px] pt-0" >{(h('description'))}
              {/* <span className="tracking-wide bg-purple-400 m-1 p-1 bg-text-colored " >{(h('description-colored'))}</span> */}
              . 
            </span>
          </h2>
          {/* <p>{(h('text'))}</p> */}
          {/* <ContactForm /> */}
          <ContactForm formId="xgvkddwk" useWebsite={true} cta={(h('email-cta'))} />
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