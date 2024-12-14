import Image from "next/image"
import nextLogo from "../assets/logos/next.png"
import reactLogo from "../assets/logos/react.png"
import { useTranslations } from "next-intl"

export default function Tech() {

  const t = useTranslations('HomePage.techs')
  const table1 = useTranslations('HomePage.techs.table1');
  const table2 = useTranslations('HomePage.techs.table2');
  const table3 = useTranslations('HomePage.techs.table3');
  const table4 = useTranslations('HomePage.techs.table4');

  return (
    <>
      <section id="stack" className="flex flex-col gap-4 mb-4">
        <h2 className="text-4xl ">{(t('label'))} </h2>
        <p>{(t('description'))}</p>
        <div className="techs flex justify-between gap-4 ">
          <div className="tech r-card">
            <h4>{(table1('head'))}</h4>
            <ul>
              <li className="purple" >{(table1('body.line1'))}</li>
              <li className="purple" >{(table1('body.line2'))}</li>
              <li className="purple" >{(table1('body.line3'))}</li>
              <li className="purple" >{(table1('body.line4'))}</li>
              <li className="purple" >{(table1('body.line5'))}</li>
              <li className="blue" >{(table1('body.line6'))}</li>
              <li className="blue" >{(table1('body.line7'))}</li>
              <li className="blue" >{(table1('body.line8'))}</li>
              <li className="gray" ></li>
            </ul>
          </div>
          <div className="tech r-card">
            <h4>{(table2('head'))}</h4>
            <ul className="">
              <li className="purple" >{(table2('body.line1'))}</li>
              <li className="purple" >{(table2('body.line2'))}</li>
              <li className="blue" >{(table2('body.line3'))}</li>
              <li className="blue" >{(table2('body.line4'))}</li>
              <li className="blue" >{(table2('body.line5'))}</li>
              <li className="blue" >{(table2('body.line6'))}</li>
              <li className="blue" >{(table2('body.line7'))}</li>
              <li className="gray" ></li>
            </ul>
          </div>
          <div className="tech r-card flex flex-col gap-[8px] justify-between">
            <div className="">
              <h4>{(table3('head'))}</h4>
              <ul>
                <li className="purple" >{(table3('body.line1'))}</li>
                <li className="blue" >{(table3('body.line2'))}</li>
                <li className="blue" >{(table3('body.line3'))}</li>
              </ul>
            </div>
            <div className="pt- ">
              <h4>{(table4('head'))}</h4>
              <ul>
                <li className="purple" >{(table4('body.line1'))}</li>
                <li className="blue" >{(table4('body.line2'))}</li>
                <li className="gray" >{(table4('body.line3'))}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}