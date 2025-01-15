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
import Link from "next/link";

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
            <div className="flex flex-col gap-4 my-10">
              <h2>Find out more of my work</h2>
              <div className="socials flex gap-12 sm:gap-24 flex-wrap ">
                <Link href="https://github.com/ruben-senpai11" target="_blank" className="flex gap-2" >
                  <svg viewBox="0 0 98 96" width="22" height="22" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" /></svg>
                  Github
                  <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" /></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/ruben-white22/" target="_blank" className="flex gap-2" >
                  <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 72 72" width="22"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>
                  Linkedin
                  <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" /></svg>
                </Link>
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