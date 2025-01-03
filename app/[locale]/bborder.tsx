"use client"
import { useEffect, useState } from "react";
import Language from "./components/language";
import Theme from "./components/theme";
import "./css/bborder.css"
import Background from "./components/background";
import LoadingGif from "./components/loadingGif";

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
  }


  return (
    <>
      <div className="flex justify-center relative">
        <div className="bborder ">
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