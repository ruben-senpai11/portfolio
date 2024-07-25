import Image from "next/image";
import stratosedi from "../assets/img/strastosedi.png"
import bunny from "../assets/img/bunny-management.png"
import bandage from "../assets/img/bandage e-commerce.png"
import mangaverseImg from "../assets/img/mangaverse.png"

export default function Works() {
  return (
    <>
      <section className="flex flex-col gap-4 ">
        <h2 className="text-4xl " >Works</h2>
        <p>
          Here are some Freelance missions, Personal & Side Projects
        </p>
        <div className="p-grid flex flex-col gap-8">
          <div className="projects flex justify-between gap-4 ">
            <div className="project project-70 ">
              <div className="project-img">
                {/* <Image src={mangaverseImg} width={500} height={100} alt="" /> */}
                <video width="600" height="400" autoPlay controls>
                  <source src="/video/mangaverse-long.webm" type="video/webm" />
                  <track
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">Mangaverse</h5>
                <p>description</p>
              </div>
            </div>
            <div className="project project-30 ">
              <div className="project-img">
                <Image src={bandage} width={500} height={100} alt="" />
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">Bandage e-commerce</h5>
                {/* <p>description</p> */}
              </div>
            </div>
          </div>
          <div className="projects flex justify-between gap-4 ">
            <div className="project project-30  ">
              <div className="project-img">
                <Image src={stratosedi} width={500} height={100} alt="" />
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">Shopify App</h5>
                {/* <p>description</p> */}
              </div>
            </div>
            <div className="project project-70 ">
              <div className="project-img">
                {/* <Image src={bunny} width={500} height={100} alt="" /> */}
                <video width="600" height="400" autoPlay controls>
                  <source src="/video/bunny.webm" type="video/webm" />
                  <track
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-description">
                <h5 className="p-title uppercase ">Bunny Management</h5>
                <p>description</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 