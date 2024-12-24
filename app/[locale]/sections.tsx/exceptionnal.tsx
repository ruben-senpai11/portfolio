import { useTranslations } from "next-intl";
import Image from "next/image";

import themeRoundedLight from "../assets/img/theme-switchers/rounded-light.png"
import themeRoundedark from "../assets/img/theme-switchers/rounded-dark.png"
import themeMultipleLight from "../assets/img/theme-switchers/multiple-light.png"
import themeMultipleDark from "../assets/img/theme-switchers/multiple-dark.png"
import themeSquareLight from "../assets/img/theme-switchers/square-light.png"
import themeSquareDark from "../assets/img/theme-switchers/square-dark.png"


import bunny1 from "../assets/img/Responsive/bunny-responsive1.png"
import bunny2 from "../assets/img/Responsive/bunny-responsive2.png"
import bunny3 from "../assets/img/Responsive/bunny-responsive3.png"
import bunny4 from "../assets/img/Responsive/bunny-responsive4.png"
import bunny5 from "../assets/img/Responsive/bunny-responsive5.png"
import bunny6 from "../assets/img/Responsive/bunny-responsive6.png"

import keni1 from "../assets/img/Responsive/KENI-responsive1.png"
import keni2 from "../assets/img/Responsive/KENI-responsive2.png"
import keni3 from "../assets/img/Responsive/KENI-responsive3.png"
import keni4 from "../assets/img/Responsive/KENI-responsive4.png"
import keni5 from "../assets/img/Responsive/KENI-responsive5.png"
import keni6 from "../assets/img/Responsive/KENI-responsive6.png"
import keni7 from "../assets/img/Responsive/KENI-responsive7.png"
import keni8 from "../assets/img/Responsive/KENI-responsive8.png"
import keni9 from "../assets/img/Responsive/KENI-responsive9.png"

import mangaverse1 from "../assets/img/Responsive/mangaverse-responsive1.png"
import mangaverse2 from "../assets/img/Responsive/mangaverse-responsive2.png"
import mangaverse3 from "../assets/img/Responsive/mangaverse-responsive3.png"
import mangaverse4 from "../assets/img/Responsive/mangaverse-responsive4.png"
//import mangaverse5 from "../assets/img/Responsive/mangaverse-responsive5.png"
import mangaverse6 from "../assets/img/Responsive/mangaverse-responsive6.png"
import mangaverse7 from "../assets/img/Responsive/mangaverse-responsive7.png"
import mangaverse8 from "../assets/img/Responsive/mangaverse-responsive8.png"
import mangaverse9 from "../assets/img/Responsive/mangaverse-responsive9.png"
import mangaverse10 from "../assets/img/Responsive/mangaverse-responsive10.png"

import sptools from "../assets/img/Responsive/SPTools-responsive.png"
import sptools1 from "../assets/img/Responsive/SPTools-responsive1.png"
import sptools2 from "../assets/img/Responsive/SPTools-responsive2.png"
import sptools3 from "../assets/img/Responsive/SPTools-responsive3.png"
import sptools4 from "../assets/img/Responsive/SPTools-responsive4.png"
import sptools5 from "../assets/img/Responsive/SPTools-responsive5.png"
import sptools6 from "../assets/img/Responsive/SPTools-responsive6.png"
import sptools7 from "../assets/img/Responsive/SPTools-responsive7.png"
import sptools8 from "../assets/img/Responsive/SPTools-responsive8.png"
import sptools9 from "../assets/img/Responsive/SPTools-responsive9.png"

import lemonplet1 from "../assets/img/Responsive/Lemonplet-responsive1.png"
import lemonplet2 from "../assets/img/Responsive/Lemonplet-responsive2.png"
import lemonplet3 from "../assets/img/Responsive/Lemonplet-responsive3.png"
import lemonplet4 from "../assets/img/Responsive/Lemonplet-responsive4.png"
import lemonplet5 from "../assets/img/Responsive/Lemonplet-responsive5.png"
import lemonplet6 from "../assets/img/Responsive/Lemonplet-responsive6.png"
import lemonplet7 from "../assets/img/Responsive/Lemonplet-responsive7.png"
import lemonplet8 from "../assets/img/Responsive/Lemonplet-responsive8.png"
import lemonplet9 from "../assets/img/Responsive/Lemonplet-responsive9.png"

import ImageCarousel from "../components/imagesCarousel";

export default function Exceptionnal() {

  const g = useTranslations("Global")
  const e = useTranslations("HomePage.exceptional")

  const bunnyImages = [
    { src: bunny1, alt: "Bunny Management Landing page-1" },
    { src: bunny2, alt: "Bunny Management Landing page-2" },
    { src: bunny3, alt: "Bunny Management Landing page-3" },
    { src: bunny4, alt: "Bunny Management Landing page-4" },
    { src: bunny5, alt: "Bunny Management Landing page-5" },
    { src: bunny6, alt: "Bunny Management Landing page-6" },
  ];
  const keniImages = [
    { src: keni1, alt: "The KENI sa tools store new model 1" },
    { src: keni2, alt: "The KENI sa tools store new model 2" },
    { src: keni3, alt: "The KENI sa tools store new model 3" },
    { src: keni5, alt: "The KENI sa tools store new model 5" },
    { src: keni6, alt: "The KENI sa tools store new model 6" },
    { src: keni7, alt: "The KENI sa tools store new model 7" },
    { src: keni8, alt: "The KENI sa tools store new model 8" },
    { src: keni9, alt: "The KENI sa tools store new model 9" },
  ];
  const sptoolsImages = [
    { src: sptools, alt: "sp Tools Refonte " },
    { src: sptools1, alt: "sp Tools Refonte 1" },
    { src: sptools2, alt: "sp Tools Refonte 2" },
    { src: sptools3, alt: "sp Tools Refonte 3" },
    { src: sptools4, alt: "sp Tools Refonte 4" },
    { src: sptools5, alt: "sp Tools Refonte 5" },
    { src: sptools6, alt: "sp Tools Refonte 6" },
    { src: sptools7, alt: "sp Tools Refonte 7" },
    { src: sptools8, alt: "sp Tools Refonte 8" },
    { src: sptools9, alt: "sp Tools Refonte 9" },
  ];
  const lemonpletImages = [
    { src: lemonplet1, alt: "Lemonplet dressing store Refonte 1" },
    { src: lemonplet2, alt: "Lemonplet dressing store Refonte 2" },
    { src: lemonplet3, alt: "Lemonplet dressing store Refonte 3" },
    { src: lemonplet4, alt: "Lemonplet dressing store Refonte 4" },
    { src: lemonplet5, alt: "Lemonplet dressing store Refonte 5" },
    { src: lemonplet6, alt: "Lemonplet dressing store Refonte 6" },
    { src: lemonplet7, alt: "Lemonplet dressing store Refonte 7" },
 //   { src: lemonplet8, alt: "Lemonplet dressing store Refonte 8" },
    { src: lemonplet9, alt: "Lemonplet dressing store Refonte 9" },
  ];
  const mangaverseImages = [
    { src: mangaverse1, alt: "Mangaverse Application 1" },
    { src: mangaverse2, alt: "Mangaverse Application 2" },
    { src: mangaverse3, alt: "Mangaverse Application 3" },
    { src: mangaverse4, alt: "Mangaverse Application 4" },
 //   { src: mangaverse5, alt: "Mangaverse Application 5" },
    { src: mangaverse6, alt: "Mangaverse Application 6" },
 //   { src: mangaverse7, alt: "Mangaverse Application 7" },
    { src: mangaverse8, alt: "Mangaverse Application 8" },
    { src: mangaverse9, alt: "Mangaverse Application 9" },
    { src: mangaverse10, alt: "Mangaverse Application 10" },
  ];

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
            {/* <video width="400" height="300" autoPlay loop controls >
              <source src="/video/responsive/KENI-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video> */}
            <ImageCarousel images={keniImages}  delay={1500} />
            {/* <video width="400" height="300" autoPlay loop controls >
              <source src="/video/responsive/mangaverse-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video> */}
            <ImageCarousel images={mangaverseImages}  delay={1500} />
          </div>
          <hr />
          <div className="r-bottom">
            {/* <video width="400" height="300" autoPlay loop controls >
              <source src="/video/responsive/Lemonplet-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video> */}
            <ImageCarousel images={lemonpletImages}  delay={1500} />
            <video width="400" height="300"  loop controls >
              <source src="/video/responsive/SPTools-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video>
            {/* <ImageCarousel images={sptoolsImages}  delay={1500} /> */}
            {/* <video width="400" height="300" autoPlay loop controls >
              <source src="/video/responsive/bunny-responsive.webm" type="video/webm" />
              {(g('videoError'))}
            </video> */}
            <ImageCarousel images={bunnyImages}  delay={1500} />
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