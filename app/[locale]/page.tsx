import { useTranslations } from 'next-intl';
import "./css/sections.css"

import BBorder from "./bborder";
import Footer from "./navigation/footer";
import Header from "./navigation/header";
import Hero from "./sections.tsx/hero";
import Skills from "./sections.tsx/skills";
import Tech from "./sections.tsx/tech";
import Works from "./sections.tsx/work";
import Exceptionnal from './sections.tsx/exceptionnal';


export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <>
      <BBorder >
        <Header title="white_dev" />
        <div className="main flex flex-col gap-16 pb-6 ">
          <Hero />
          <Exceptionnal />
          <Skills />
          <Works />
          <Tech />
          {/* <div className="main flex gap-4 my-0 mx-auto" > I'm a
            <span>developer</span>
            <span>baskettball player</span>
            <span>pianist</span>
            <span>electronician</span>
            <span>boxer</span>
            <span>photographer</span>
            <span>human</span>
          </div> */}
        </div>

        <Footer />
      </BBorder>
    </>
  );
}