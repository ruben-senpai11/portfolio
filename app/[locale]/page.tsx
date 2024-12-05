import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

import BBorder from "./bborder";
import Footer from "./navigation/footer";
import Header from "./navigation/header";
import Hero from "./sections.tsx/hero";
import Skills from "./sections.tsx/skills";
import Tech from "./sections.tsx/tech";
import Works from "./sections.tsx/work";

 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <>
      <BBorder >
        <Header title="white_dev" />
        {/* <div>
          <h1>{t('title')}</h1>
          <Link href="/about">{t('about')}</Link>
        </div> */}
        <div className="main flex flex-col gap-16 ">
          <Hero />
          <Skills />
          <Works />
          <Tech />
          <div className="flex gap-4 my-0 mx-auto" >I'am a
            <span>developer</span>
            <span>baskettball player</span>
            <span>pianist</span>
            <span>electronician</span>
            <span>boxer</span>
            <span>photographer</span>
            <span>human</span>
          </div>
        </div>
        <Footer />
      </BBorder>
    </>
  );
}