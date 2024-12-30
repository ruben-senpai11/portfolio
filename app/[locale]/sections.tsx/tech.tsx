import Image from "next/image"
import nextLogo from "../assets/logos/next.png"
import reactLogo from "../assets/logos/react.png"
import { useTranslations } from "next-intl"

export default function Tech() {

  const t = useTranslations('HomePage.techs')
  const g = useTranslations('Global')
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
              <li className="purple" >{(table2('body.line3'))}</li>
              <li className="purple" >{(table2('body.line4'))}</li>
              <li className="blue" >{(table2('body.line5'))}</li>
              <li className="blue" >{(table2('body.line6'))}</li>
              {/* <li className="blue" >{(table2('body.line7'))}</li> */}
              <li className="blue" >{(table2('body.line8'))}</li>
            </ul>
          </div>
          <div className="tech r-card flex flex-col gap-[8px] justify-between">
            <div className="">
              <h4>{(table3('head'))}</h4>
              <ul>
                <li className="purple" >{(table3('body.line1'))}</li>
                <li className="purple" >{(table3('body.line2'))}</li>
                <li className="blue" >{(table3('body.line3'))}</li>
              </ul>
            </div>
            <div className="pt-4 ">
              <h4>{(table4('head'))}</h4>
              <ul>
                <li className="purple" >{(table4('body.line1'))}</li>
                <li className="blue" >{(table4('body.line2'))}</li>
                <li className="blue" >{(table4('body.line3'))}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-nowrap justify-start items-start gap-1.5 ">
          <span style={{ width: "16px;", height: "16px", paddingTop:"4px" }} >
            <svg fill="currentColor" height="16px" width="16px" viewBox="0 0 45.311 45.311"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656 c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635 C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001 c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0 c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578 c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0 c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29 c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z"></path> </g> </g></svg>
          </span>
          <p className="" >
            {(g('tech-colors'))}
          </p>
        </div>
      </section>
    </>
  )
}