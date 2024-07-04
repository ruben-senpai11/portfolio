import BBorder from "./bborder";
import Footer from "./navigation/footer";
import Header from "./navigation/header";
import Hero from "./sections.tsx/hero";
import Skills from "./sections.tsx/skills";


export default function Page() {


  return (
    <>
      <BBorder >
        <Header title="white_dev" />
        <div className="main flex flex-col gap-16 ">
          <Hero/>
          <Skills/>
        </div>
        <Footer />
      </BBorder>
    </>
  )
}