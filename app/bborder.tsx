/*"use client"
import { useEffect, useState } from "react";*/
import { setupScrollListener } from "./utils/scrollPosition";

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

return (
  <>
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
  </>
)
}