import { useTranslations } from "next-intl";
import Image from "next/image";

import themeRoundedLight from "../assets/img/theme-switchers/rounded-light.png"
import themeRoundedark from "../assets/img/theme-switchers/rounded-dark.png"
import themeMultipleLight from "../assets/img/theme-switchers/multiple-light.png"
import themeMultipleDark from "../assets/img/theme-switchers/multiple-dark.png"
import themeSquareLight from "../assets/img/theme-switchers/square-light.png"
import themeSquareDark from "../assets/img/theme-switchers/square-dark.png"


export default function Exceptionnal() {

  const g = useTranslations("Global")
  const e = useTranslations("HomePage.exceptional")

  return (
    <>
      <section id="exceptionnal" className="flex flex-col gap-4 ">
        <h2 className="text-4xl " >{(e('title'))}</h2>
        {/* <p>To defend why you may choose me among all the others, I could list you but I'll focus on those two ones </p>
        <p>1. I am CREATIVE & CONSISTANT</p>
        <div className="theme-switchers">
          <Image src={themeRoundedLight} width={250} height={100} alt="Rounded Theme Switcher in Light Mode" />
          <Image src={themeMultipleLight} width={250} height={100} alt="Multiple Theme Switcher in Light Mode" />
          <Image src={themeSquareLight} width={250} height={100} alt="Square Theme Switcher in Light Mode" />
        </div>
        <p>I just love innovation, simple but quite beatiful things. I've been fascinated by color switches and achieved to create different format of switchers with pure Css and Typescrit. It gonna highlight the way I can bring your ideas to life, without effort, because I'm doing this for a while regardless to the project type or the technologies used. </p> */}
        <p> </p>

        <p className="leading-6 ">
          {(e('p1'))}
          <br />
          {(e('p2'))}
        </p>
        <div className="responsivity flex flex-col">
          <div className="r-top">
            <video width="400" height="300" autoPlay loop >
              <source src="/video/responsive/KENI-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video>
            <video width="400" height="300" autoPlay loop >
              <source src="/video/responsive/mangaverse-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video>
          </div>
          <hr />
          <div className="r-bottom">
            <video width="400" height="300" autoPlay loop >
              <source src="/video/responsive/Lemonplet-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video>
            <video width="400" height="300" autoPlay loop >
              <source src="/video/responsive/SPTools-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video>
            <video width="400" height="300" autoPlay loop >
              <source src="/video/responsive/bunny-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video>
          </div>
        </div>
        <p className="leading-6" >
          {(e('p3'))}
          <br />
          {(e('p4'))}
        </p>
        <div className=""></div>
      </section>
    </>
  )
}