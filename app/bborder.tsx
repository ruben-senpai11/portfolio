/*"use client"
import { useEffect, useState } from "react";*/
import { setupScrollListener } from "./utils/scrollPosition";

interface Props {
  children: any
}

export default function BBorder({ children }: Props) {
/*
  const [scrollPosition, setScrollPosition] = useState(100)

  useEffect(() => {
    const currentScroll:any =  setupScrollListener();
    setScrollPosition(currentScroll)
    console.log("current : " +scrollPosition)
  }, []);
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