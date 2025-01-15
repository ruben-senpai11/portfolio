"use client"
import { ReactNode, useEffect, useState } from "react";

interface Props {
  timer: number,
}

export default function SplashScreen({ timer }: Props) {
  
  const [delayOut, setDelayOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayOut(true), timer);
    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, [timer]);

  if (delayOut) {
    return null; // Or replace with what you want to render after the splash screen
  }

  return (
    <>
      {!delayOut &&

        <div className="splash-screen w-100 h-100 flex flex-col justify-center items-center ">
          <p className="text-4xl font-normal flex gap-4" >
            Ruben Honfovou
            <span className="font-thin">Portfolio</span>
          </p>
        </div>
      
      }
    </>
  )
}