"use client"
import { useEffect, useState } from "react";
// import { setupScrollListener } from "./utils/scrollPosition";
import Environment from "./components/environment";

interface Props {
  children: any
}

export default function BBorder({ children }: Props) {
  /*
    const [scrollPercent, setScrollPercent] = useState(0);
  
      const handleScroll = () => {
          const scrollTop = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;
          const viewportHeight = window.innerHeight;
          const scrollableHeight = documentHeight - viewportHeight;
  
          const scrollPercent = (scrollTop / scrollableHeight) * 100;
          const scrollPixels = window.scrollY
          setScrollPercent(scrollPixels);
          console.log(scrollPixels)
      };
  
      useEffect(() => {
          window.addEventListener('scroll', handleScroll);
  
          // Clean up the event listener on component unmount
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);
        <div className="bborder-right" style={{height: `${(scrollPercent.toFixed(0))}px`}} >          
  */


  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Bbordered = screenWidth > 1400 ? "bbordered" : "";
  const autoLeftCalc = screenWidth > 1400 ? "auto-left" : "inner-left";



  return (
    <>
        <div className={`flex justify-center relative ${Bbordered}`}>
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
          <div className={`env ${autoLeftCalc}`} style={{ left: `${(screenWidth - 1397) /2 }px`, bottom: "24px" }}>
            <Environment/>
          </div>
        </div>
    </>
  )
}