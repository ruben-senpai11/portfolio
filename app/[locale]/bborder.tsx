"use client"
import { useEffect, useState } from "react";
import Language from "./components/language";
import Theme from "./components/theme";
import "./css/bborder.css"

interface Props {
  children: any
}

export default function BBorder({ children }: Props) {

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const Bbordered = screenWidth > 1400 ? "bbordered" : "";
  // const autoLeftCalc = screenWidth > 1400 ? "auto-left" : "inner-left";


  return (
    <>
      <div className={`flex justify-center relative `}>
        <div className="bborder">
          <div className="bborder-right">
            <div className="bborder-top">
              <div className="bborder-left  ">
                <div className="flex flex-col ">
                  <div className="">
                    {children}
                  </div>
                  <div className="bborder-bottom">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`env`} 
          // style={{ left: `${(screenWidth - 1397) / 2}px`, bottom: "24px" }}
        >
          <Theme />
          <Language />
        </div>
      </div>
    </>
  )
}