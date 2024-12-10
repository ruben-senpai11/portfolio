import Image from "next/image";
import stratosedi from "../assets/img/strastosedi.png"
import bunny from "../assets/img/bunny-management.png"
import bandage from "../assets/img/bandage e-commerce.png"
import mangaverseImg from "../assets/img/mangaverse.png"
import { useTranslations } from "next-intl";

export default function Works() {

  const w = useTranslations("HomePage.works")

  return (
    <>
      <section id="works" className="flex flex-col gap-4 ">
        <h2 className="text-4xl " >{(w('label'))}</h2>
        <p>
          {(w('description'))}
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
      </section>
    </>
  )
} 