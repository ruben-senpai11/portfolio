import Image from "next/image"
import nextLogo from "../assets/logos/next.png"
import reactLogo from "../assets/logos/react.png"

export default function Tech() {

  return (
    <>
      <section className="flex flex-col gap-4 ">
        <h2 className="text-4xl " >Techs</h2>
        <p>
          Among all the technologies we learn for studies, training and work in enterprises, the ones we love and are familiar with ; here are the the ones I acctually use. From the most mastered to those I'm still discovering
        </p>
        <div className="flex justify-between gap-4 ">
          <div className="tech r-card">
            <h4>Programming Languages</h4>
            <ul>
              <li className="purple" >HTML & CSS</li>
              <li className="purple" >Typescript, Javascript</li>
              <li className="purple" >PHP</li>
              <li className="purple" >MySQL</li>
              <li className="purple" >PostgreSQL</li>
              <li className="blue" >Python</li>
              <li className="blue" >C</li>
              <li className="blue" >Arduino, Energia</li>
              <li className="gray" ></li>
            </ul>
          </div>
          <div className="tech r-card">
            <h4>Libraires & Frameworks</h4>
            <ul className="">
              <li className="purple" >
                {/* <Image src={nextLogo} width={100} height={100} alt="NextLogo" /> */}
                Next.js
              </li>
              {/* <li className="purple" ><Image src={reactLogo} width={100} height={100} alt="reactLogo" />React</li> */}
              <li className="purple" >Laravel </li>
              <li className="purple" >GSAP</li>
              <li className="blue" >Remix</li>
              <li className="blue" >Express</li>
              <li className="blue" >Livewire</li>
              <li className="blue" >Prisma</li>
              <li className="blue" >Webpack</li>
              <li className="gray" ></li>
            </ul>
          </div>
          <div className="tech r-card flex flex-col gap-[8px] justify-betweden">
            <div className="">
              <h4>Content Management System</h4>
              <ul>
                <li className="purple" >Shopify</li>
                <li className="blue" >WordPress</li>
                <li className="blue" >Webflow</li>
              </ul>
            </div>
            <div className="pt-8 ">
              <h4>Other Tools</h4>
              <ul>
                <li className="purple" >Figma</li>
                <li className="blue" >Photoshop</li>
                <li className="gray" >Jest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}