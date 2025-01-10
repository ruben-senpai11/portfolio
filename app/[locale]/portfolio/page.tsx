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
import portfolio from "../assets/img/portfolio.png"


import "../css/portfolio.css"
import Project from "../sections/project";

export default function Page() {

  return (
    <>
      <BBorder>
        <Header title="white_dev" />
        <div className="main pb-16">
          <section className=" flex flex-col gap-16">
            <h1 className="text-[48px] " >Portfolio</h1>
            <div className="flex flex-col gap-20 m-autod ">
              <div className="summary flex flex-col ">
                <h2>Summary</h2>
                <p>
                  Proven expertise in fluid and responsive interfaces design from scratch,
                  allowing great flexibility across technologies.
                </p>
              </div>
              <div className="flex flex-col">
                <h2>Freelance & Personal Projects</h2>
                <div className="projects-grid ">
                  <Project image={lemonplet} title="Lemönplet" stack={["Shopify", "HTML & CSS", "JS"]} link="https://lemonplet.com/" description="We given this store a new look with a pixel-perfect design mockup into Shopify theme translation" />
                  <Project image={evren} title="Evren Shah " stack={["React", "Figma", "TS", "HTML & CSS"]} link="https://portofolio-rosy-eight.vercel.app/" description="Integration of a frontend devleoper portfolio with double theme switch" />
                  <Project image={bandage} title="Bandage E-commerce" stack={["React", "Figma", "TS", "HTML & CSS"]} link="https://bandage-ecommerce-ui.vercel.app/" description="Translating Figma mockup into a pixelperfect website. I’ve improved UX with lazyload, animations..." />
                  <Project image={bunny} title="Bunny Management" stack={["Laravel", "MySQL", "REST", "API"]} link="https://whitedev.vercel.app/video/bunny.webm" description=" With given templates, I created dynamic forms, custom pages & datatables and an awesome landing page" />
                  <Project image={fig} title="Fig Intranet" stack={[]} link="" description="" />
                  <Project image={stratosedi} title="Stratos Edi" stack={["Remix, React, Prisma, GraphQL"]} link="" description="Building from scratch an unique app to improve orders tracking by the organization merchants" />
                  <Project image={portfolio} title="Portfolio" stack={["Next.js, TS, Tailwind CSS"]} link="" description="Crafted a simple & unique portfolio to tell you about me. It involved a out of the box thinking for the page border for eg" />
                </div>
              </div>
              <div className="flex flex-col">
                <h2>In enterprise projets</h2>
                <div className="projects-grid ">
                  <Project image={sptools} title="SP Tools" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Murano Bowl" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="KENI SA" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Margaux keller Collections" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Sharelock" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Yemi" stack={[]} link="" description="" />
                </div>
              </div>
              <div className="flex flex-col">
                <h2>For the community Projects</h2>
                <div className="projects-grid ">
                  <Project image={lemonplet} title="Responsive Navbar" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Multiple Themes" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Infinite Scroll" stack={[]} link="" description="" />
                  <Project image={lemonplet} title="Responsive Grid" stack={[]} link="" description="" />
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