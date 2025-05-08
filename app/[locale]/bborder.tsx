"use client"
import { useEffect, useRef, useState } from "react";
import Language from "./components/language";
import Theme from "./components/theme";
import "./css/bborder.css"
import Background from "./components/background";
import LoadingGif from "./components/loadingGif";
import SplashScreen from "./sections/splashScreen";
import gsap from "gsap";
import CustomCursor from "./components/customCursor";
import GlassParticles from "./components/glassParticles";
import GlassBackground from "./components/glassBackground";

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

  const [isVisible, setIsVisible] = useState(false)

  const boxRef = useRef(null);
  const contentRef = useRef(null);

  if (typeof window !== "undefined" && "MutationObserver" in window) {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
          const newTheme = document.body.getAttribute("data-theme");

          if (newTheme == "dark") {
            setIsVisible(true)
          }
          else setIsVisible(false)
        }
      }
    });
    // Start observing changes to the `body` element
    observer.observe(document.body, { attributes: true });


    useEffect(() => {
      if (!sessionStorage.getItem('sessionInitialized')) {
        sessionStorage.setItem('sessionInitialized', 'true');
        const timeline = gsap.timeline()

        if (window.innerWidth > 924) {          
          gsap.fromTo(
            contentRef.current,
            { width: "0" },
            { width: "100%", duration: 2, ease: "elastic.out", delay: 2 }
            );
            
        } else {
          gsap.fromTo(
            boxRef.current,
            { width: "0" },
            { width: "100%", duration: 2, ease: "elastic.out", delay: 2 }
          );
        }
      }
    }, []);

  }

  return (
    <>
      {/* <CustomCursor /> */}
      <div className="flex justify-center relative">
        {/* <SplashScreen name="Ruben Honfovou" label="Portfolio" timer={2000} /> */}
        <div ref={boxRef} className="bborder ">
          <div className="background">
            <div className="bborder-right">
              <div className="bborder-top">
                <div className="bborder-left  ">
                  <div className="flex flex-col ">
                    <div ref={contentRef} className="">
                        {children}
                    </div>
                    <div className="bborder-bottom">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="env">
            <Theme />
          <GlassBackground />
          <Language />
          </div>
          <div className={isVisible ? "block" : "hidden"}>
            <Background lightColors={["red", "blue", "green"]} darkColors={["red", "blue", "green", "cyan", "default"]} />
          </div>
        </div>
      </div>
    </>
  )
}