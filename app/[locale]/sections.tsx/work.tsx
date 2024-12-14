import Image from "next/image";
import stratosedi from "../assets/img/strastosedi.png"
import bunny from "../assets/img/bunny-management.png"
import bandage from "../assets/img/bandage e-commerce.png"
import mangaverseImg from "../assets/img/mangaverse.png"
import { useTranslations } from "next-intl";
import TinyBborder from "../components/tiny-bborder";
import { Link } from "@/i18n/routing";

export default function Works() {

  const w = useTranslations("HomePage.works")

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
            <div className="project project-70 ">
              <div className="project-img">
                {/* <Image src={mangaverseImg} width={500} height={100} alt="" /> */}
                <video width="600" height="400" autoPlay controls>
                  <source src="/video/mangaverse-long.webm" type="video/webm" />
                  {(w('videoError'))}
                </video>
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">{(w('work1.title'))}</h5>
                {(w('work1.description'))}
              </div>
            </div>
            <div className="project project-30 ">
              <div className="project-img">
                <Image src={bandage} width={500} height={100} alt="" />
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">{(w('work2.title'))}</h5>
                {(w('work2.description'))}
              </div>
            </div>
          </div>
          <div className="projects flex justify-between gap-4 ">
            <div className="project project-30  ">
              <div className="project-img">
                <Image src={stratosedi} width={500} height={100} alt="" />
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">{(w('work3.title'))}</h5>
                {(w('work3.description'))}
              </div>
            </div>
            <div className="project project-70 ">
              <div className="project-img">
                {/* <Image src={bunny} width={500} height={100} alt="" /> */}
                <video width="600" height="400" autoPlay controls>
                  <source src="/video/bunny.webm" type="video/webm" />
                  {(w('videoError'))}
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
          <TinyBborder >
            <span className="see-more flex px-8 py-2">
              <Link href="/resume" className=" flex gap-4" >
                <span> {(w('see-more'))} </span>
                <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg>
              </Link>
            </span>
          </TinyBborder>
        </div>
      </section>
    </>
  )
} 