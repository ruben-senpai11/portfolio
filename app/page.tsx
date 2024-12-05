import BBorder from "./[locale]/bborder";
import Footer from "./[locale]/navigation/footer";
import Header from "./[locale]/navigation/header";
import Hero from "./[locale]/sections.tsx/hero";
import Skills from "./[locale]/sections.tsx/skills";
import Tech from "./[locale]/sections.tsx/tech";
import Works from "./[locale]/sections.tsx/work";


export default function Page() {


  return (
    <>
      <BBorder >
        <Header title="white_dev" />
        <Footer />
      </BBorder>
    </>
  )
}