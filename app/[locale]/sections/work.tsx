import { useTranslations } from "next-intl";
import TinyBborder from "../components/tiny-bborder";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import ImageCarousel from "../components/imagesCarousel";

import strastosedi1 from "../assets/img/strastosedi1.png"
import strastosedi2 from "../assets/img/strastosedi2.png"
import stratosedi from "../assets/img/strastosedi.png"
import bandage from "../assets/img/bandage e-commerce.png"
import CTA from "../components/cta";

export default function Works() {

  const w = useTranslations("HomePage.works")
  const g = useTranslations("Global")

  const strastosImages = [
    { src: stratosedi, alt: "strastosedi Logo" },
    { src: strastosedi1, alt: "strastosedi Presentation 1" },
    { src: strastosedi2, alt: "strastosedi Presentation 2" }
  ]

  return (
    <>
      <section id="works" className="flex flex-col gap-4 ">
        <h2 className="text-4xl " >{(w('label'))}</h2>
        <p className=" flex-wrap ">
          {(w('description'))}
          <Link href="/resume" > {(w('resume-link'))} </Link>
        </p>
        <div className="p-grid flex flex-col gap-8">
          <div className="projects flex justify-between gap-4 ">
            <div className="wproject project-70 ">
              <div className="project-img">
                {/* <Image src={mangaverseImg} width={500} height={100} alt="" /> */}
                <video width="600" height="400" autoPlay controls>
                  <source src="/video/mangaverse-long.webm" type="video/webm" />
                  {(g('videoError'))}
                </video>
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">{(w('work1.title'))}</h5>
                {(w('work1.description'))}
              </div>
            </div>
            <div className="wproject project-30 ">
              <div className="project-img">
                <Image src={bandage} width={400} height={100} alt="bandage e-commerce" />
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">{(w('work2.title'))}</h5>
                {(w('work2.description'))}
              </div>
            </div>
          </div>
          <div className="projects flex justify-between gap-4 ">
            <div className="wproject project-30  ">
              <div className="project-img stratos">
                {/* <Image src={stratosedi} width={500} height={100} alt="" /> */}
                <ImageCarousel images={strastosImages} delay={2000} />
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">{(w('work3.title'))}</h5>
                {(w('work3.description'))}
              </div>
            </div>
            <div className="wproject project-70 ">
              <div className="project-img">
                {/* <Image src={bunny} width={500} height={100} alt="" /> */}
                <video width="600" height="400" autoPlay controls>
                  <source src="/video/bunny.webm" type="video/webm" />
                  {(g('videoError'))}
                </video>
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">{(w('work4.title'))}</h5>
                {(w('work4.description'))}
              </div>
            </div>
          </div>
        </div>
        <div className="tb-see-more m-auto mt-4">
          {/* <TinyBborder >
            <span className="see-more flex px-8 py-2">
              <Link href="/resume" target="_blank" className=" flex gap-4" >
                <span> {(w('see-more'))} </span>
                <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg>
              </Link>
            </span>
          </TinyBborder> */}
          <div className="w-max m-auto">
            <CTA link="/portfolio" label={(w('see-more'))} />
          </div>
        </div>
      </section>
    </>
  )
} 