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
      </section>
    </>
  )
}