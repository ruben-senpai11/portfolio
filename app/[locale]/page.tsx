import { useTranslations } from 'next-intl';
import "./css/home.css"

import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Tech from "./sections/tech";
import Works from "./sections/work";
import Exceptionnal from './sections/exceptionnal';
import Contact from './sections/contact';


export default function HomePage() {


  return (
    <>
      <div className="main flex flex-col gap-16 pb-6 ">
        <Hero />
        <Exceptionnal />
        {/* <Skills /> */}
        <Works />
        <Tech />
        <Contact />
      </div>
    </>
  );
}