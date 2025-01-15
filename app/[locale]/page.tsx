import { useTranslations } from 'next-intl';
import "./css/home.css"

import BBorder from "./bborder";
import Footer from "./navigation/footer";
import Header from "./navigation/header";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Tech from "./sections/tech";
import Works from "./sections/work";
import Exceptionnal from './sections/exceptionnal';
import ContactForm from './sections/contact';
import SplashScreen from './sections/splashScreen';


export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <>
      <SplashScreen timer={2000} />
      
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
          <ContactForm />
        </div>
        <Footer />
      </BBorder>
    </>
  );
}