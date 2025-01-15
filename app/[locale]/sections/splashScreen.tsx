"use client"
import { useState } from "react";

interface Props {
  timer: number
}

export default async function SplashScreen({ timer }: Props) {

  const [delayOut, setDelayOut] = useState(false)
  await new Promise((resolve) => setTimeout(resolve, timer));

  setDelayOut(true)

  return (
    <>
      {/* {!delayOut && */}

        <div className="splash-screen w-100 h-100 flex flex-col justify-center items-center ">
          <p className="text-4xl font-normal flex gap-4" >
            Ruben Honfovou
            <span className="font-thin">Portfolio</span>
          </p>
        </div>
      
      {/* } */}
    </>
  )
}