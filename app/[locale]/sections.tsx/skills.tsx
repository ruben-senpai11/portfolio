"use client"

import { useTranslations } from "next-intl";
import RMore from "../components/r-more";
import { useState } from "react";


export default function Skills() {

  const g = useTranslations("Global")
  const s = useTranslations('HomePage.skills');
  const table1 = useTranslations('HomePage.skills.table1');
  const table2 = useTranslations('HomePage.skills.table2');
  const table3 = useTranslations('HomePage.skills.table3');

  const [visibility, setVisibility] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
  });

  const handleMore = (index: number) => {
    // Toggle visibility based on the index
    setVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <section id="skills" className="flex flex-col gap-4 ">
        <h2 className="text-4xl " >{(s('label'))}</h2>
        <p>{(s('description'))}</p>
        <div className="skills flex justify-between gap-4 ">
          <div className={"skill r-card " + ( visibility[1] ? "" : "is-shown" )}>
            <h4>{(table1('head'))}</h4>
            <ul>
              <li className="purple" >{(table1('body.line1'))}</li>
              <li className="purple" >{(table1('body.line2'))}</li>
              <li className="purple" >{(table1('body.line3'))}</li>
              <li className="purple" >{(table1('body.line4'))}</li>
              <li className="purple" >{(table1('body.line5'))}</li>
              <li className="purple" >{(table1('body.line6'))}</li>
              <li className="purple" >{(table1('body.line7'))}</li>
              <li className="purple" >{(table1('body.line8'))}</li>
              <li className="purple" >{(table1('body.line9'))}</li>
              <li className="purple" >{(table1('body.line10'))}</li>
              <li className="purple" >{(table1('body.line11'))}</li>
              <li className="purple" >{(table1('body.line12'))}</li>
              <li className="purple" >{(table1('body.line13'))}</li>
              <li className="purple" >{(table1('body.line14'))}</li>

              <li className="purple" >{(table1('body.line15'))}</li>
              <li className="purple" >{(table1('body.line16'))}</li>
              <li className="" ></li>
              <li className="" ></li>
              <li className="" ></li>
            </ul>
            <RMore index={1} isHidden={visibility[1]} handleMore={handleMore} />
          </div>
          <div className={"skill r-card " + ( visibility[2] ? "" : "is-shown" )}>
            <h4>{(table2('head'))}</h4>
            <ul>
              <li className="purple" >{(table2('body.line2'))}</li>
              <li className="purple" >{(table2('body.line1'))}</li>
              <li className="purple" >{(table2('body.line3'))}</li>
              <li className="purple" >{(table2('body.line4'))}</li>
              <li className="purple" >{(table2('body.line5'))}</li>
              <li className="purple" >{(table2('body.line6'))}</li>
              <li className="purple" >{(table2('body.line7'))}</li>
              <li className="purple" >{(table2('body.line8'))}</li>
              <li className="purple" >{(table2('body.line9'))}</li>
              <li className="purple" >{(table2('body.line10'))}</li>
              <li className="purple" >{(table2('body.line11'))}</li>
              <li className="purple" >{(table2('body.line12'))}</li>
              <li className="purple" >{(table2('body.line13'))}</li>

              <li className="purple" >{(table2('body.line14'))}</li>
              <li className="purple" >{(table2('body.line15'))}</li>
              <li className="purple" >{(table2('body.line16'))}</li>
              <li className="purple" >{(table2('body.line17'))}</li>
              <li className="purple" >{(table2('body.line18'))}</li>
              <li className="purple" >{(table2('body.line19'))}</li>
              <li className="purple" >{(table2('body.line20'))}</li>
              <li className="purple" >{(table2('body.line21'))}</li>
            </ul>
            <RMore index={2} isHidden={visibility[2]} handleMore={handleMore} />
          </div>
          <div className={"skill r-card " + ( visibility[3] ? "" : "is-shown" )}>
            <h4>{(table3('head'))}</h4>
            <ul>
              <li className="purple" >{(table3('body.line1'))}</li>
              <li className="purple" >{(table3('body.line2'))}</li>
              <li className="purple" >{(table3('body.line3'))}</li>
              <li className="purple" >{(table3('body.line4'))}</li>
              <li className="purple" >{(table3('body.line5'))}</li>
              <li className="purple" >{(table3('body.line6'))}</li>
              <li className="purple" >{(table3('body.line7'))}</li>
              <li className="purple" >{(table3('body.line8'))}</li>
              <li className="purple" >{(table3('body.line9'))}</li>
              <li className="purple" >{(table3('body.line10'))}</li>
              <li className="purple" >{(table3('body.line11'))}</li>
              <li className="purple" >{(table3('body.line12'))}</li>

              <li className="purple" >{(table3('body.line13'))}</li>
              <li className="purple" >{(table3('body.line14'))}</li>
              <li className="purple" >{(table3('body.line15'))}</li>
              <li className="purple" >{(table3('body.line16'))}</li>
              <li className="purple" >{(table3('body.line17'))}</li>
              {/* <li className="blue" >{(table3('body.line17'))}</li> */}
              <li className="" ></li>
              <li className="" ></li>
              <li className="" ></li>
            </ul>
            <RMore index={3} isHidden={visibility[3]} handleMore={handleMore} />
          </div>
        </div>
        {/* <div className=" ">
          <p className="inline-flex flex-nowrap justify-start items-center gap-2" >
            <svg fill="currentColor" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.311 45.311"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656 c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635 C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001 c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0 c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578 c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0 c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29 c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z"></path> </g> </g></svg>
            {(g('skills-Colors'))}
          </p>
        </div> */}
      </section>
    </>
  )
}