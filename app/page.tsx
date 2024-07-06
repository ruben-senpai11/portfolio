import BBorder from "./bborder";
import Footer from "./navigation/footer";
import Header from "./navigation/header";
import Hero from "./sections.tsx/hero";
import Skills from "./sections.tsx/skills";
import Tech from "./sections.tsx/tech";
import Works from "./sections.tsx/work";


export default function Page() {


  return (
    <>
      <BBorder >
        <Header title="white_dev" />
        <div className="main flex flex-col gap-16 ">
          <Hero/>
          <Skills/>
          <Works />
          <Tech />
        </div>
        <Footer />
      </BBorder>
    </>
  )
}