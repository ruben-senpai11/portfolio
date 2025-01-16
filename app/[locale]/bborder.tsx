"use client"
import { useEffect, useRef, useState } from "react";
import Language from "./components/language";
import Theme from "./components/theme";
import "./css/bborder.css"
import Background from "./components/background";
import LoadingGif from "./components/loadingGif";
import SplashScreen from "./sections/splashScreen";
import gsap from "gsap";

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
        console.log('Session started');

        // GSAP animation

        if (window.innerWidth > 924) {
          gsap.fromTo(
            boxRef.current,
            { width: "0px", minWidth: "0px!important", height: "0px" }, // Initial state
            { width: "100%", minWidth: "100%", height: "100%", duration: 4, ease: "bounce.inOut", delay: 2 }
          );

        } else {
          gsap.fromTo(
            boxRef.current,
            { opacity: "0" }, // Initial state
            { opacity: "1", duration: 4, ease: "bounce.inOut", delay: 2 }
          );
        }
      }
    }, []);


  }

  return (
    <>
      <div className="flex justify-center relative">
        <SplashScreen timer={2000} />
        <div ref={boxRef} className="bborder ">
          <div className="background">
            <div className="bborder-right">
              <div className="bborder-top">
                <div className="bborder-left  ">
                  <div className="flex flex-col ">
                    <div className="">
                      <LoadingGif>
                        {children}
                      </LoadingGif>
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