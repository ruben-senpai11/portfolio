import BBorder from "../bborder";
import Footer from "../navigation/footer";
import Header from "../navigation/header";
import ContactForm from "../sections/contact";

import stratosedi from "../assets/img/strastosedi.png"
import evren from "../assets/img/Even Shah.png"
import bandage from "../assets/img/bandage e-commerce.png"
import lemonplet from "../assets/img/Responsive/Lemonplet-responsive1.png"
import bunny from "../assets/img/bunny-management.png"
import fig from "../assets/img/joystick.png"
import sptools from "../assets/img/Responsive/SPTools-responsive.png"
import mangaverse from "../assets/img/mangaverse.png"
import portfolio from "../assets/img/portfolio.png"

import navbar from "../assets/img/responsive-navbar.png"
import soon from "../assets/img/coming-soon.webp"

import "../css/portfolio.css"
import Project from "../sections/project";

export default function Page() {

  return (
    <>
      <BBorder>
        <Header title="white_dev" />
        <div className="main pb-16">
          <section className=" flex flex-col gap-6">
            <h1 className="text-[48px] " >Portfolio</h1>
            <div className="flex flex-col gap-12 m-autod ">
              <div className="summary flex flex-col ">
                {/* <h2>Summary</h2> */}
                <p>
                  Summary : Proven expertise in building fluid and responsive interfaces from scratch,
                  allowing great flexibility across technologies.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <h2>Freelance & Side Projects</h2>
                <div className="projects-grid ">
                  <Project image={bunny} title="Bunny Management" stack={["Laravel", "MySQL", "REST", "API"]} link="https://whitedev.vercel.app/video/bunny.webm" description=" With given templates, I created dynamic forms, custom pages & datatables and an awesome landing page" />
                  <Project image={lemonplet} title="Lemönplet" stack={["Shopify", "HTML & CSS", "JS"]} link="https://lemonplet.com/" description="We given this store a new look with a pixel-perfect design mockup into Shopify theme translation" />
                  <Project image={bandage} title="Bandage E-commerce" stack={["React", "Figma", "TS", "HTML & CSS"]} link="https://bandage-ecommerce-ui.vercel.app/" description="Translating Figma mockup into a pixelperfect website. I’ve improved UX with lazyload, animations..." />
                  <Project image={evren} title="Evren Shah Portfolio" stack={["React", "Figma", "TS", "HTML & CSS"]} link="https://portofolio-rosy-eight.vercel.app/" description="Integration of a frontend devleoper portfolio mockup in a react website. I've added a beta double theme switch" />
                  <Project image={fig} title="Fig Intranet" stack={["PHP", "jQUERY", "HTML & CSS"]} link="" description="For the video games events, we've buit this website accessible not through interne but local network to supply essential informations our guests." />
                  <Project image={mangaverse} title="Mangaverse" stack={["Next.js, TS, Tailwind CSS", "Apollo"]} link="https://my-mangaverse.vercel.app/" description="Building an unique web app involving multiple-theme switch, server actions, API, design, user-centric approach..." />
                  <Project image={stratosedi} title="Stratos EDI Shopify App" stack={["Remix, React, Prisma, GraphQL"]} link="" description="Building from scratch an unique app to improve orders tracking by the organization merchants" />
                  <Project image={portfolio} title="My Portfolio" stack={["Next.js, TS, Tailwind CSS"]} link="https://whitedev.vercel.app/" description="Crafted a simple & unique portfolio to tell you about me. It involved a out of the box thinking, user-centered approach and so on .." />
                </div>
              </div>
              {/* <div className="flex flex-col">
                <h2>In enterprise projets</h2>
                <div className="projects-grid ">
                  <Project image={sptools} title="SP Tools" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Murano Bowl" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="KENI SA" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Margaux keller Collections" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Sharelock" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Yemi" stack={[]} link="" description="" />
                </div>
              </div> */}
              <div className="flex flex-col gap-8">
                <h2>For the community Projects</h2>
                <div className="projects-grid ">
                  <Project image={navbar} title="Responsive Navbar" stack={["HTML & CSS", "Javascript"]} link="https://github.com/ruben-senpai11/Reponsive-Navbar" description="Fully Responsive Navbar built from scratch. If creating Navbar is a stuck, here is a no-lirary and easy to understand code who may help you stand out." />
                  <Project image={soon} title="Multiple Themes Switches" stack={[]} link="" description="Comming soon.." />
                  <Project image={soon} title="Infinite Scroll" stack={[]} link="" description="Comming soon.." />
                  <Project image={soon} title="Responsive Grid" stack={[]} link="" description="Comming soon.." />
                </div>
              </div>
            </div>
          </section>
          <ContactForm />
        </div>
        <Footer />
      </BBorder>
    </>
  )
}