"use client"
import { ReactNode, useEffect, useState } from "react";

interface Props {
  timer: number,
}

export default function SplashScreen({ timer }: Props) {

  const [showSplash, setShowSplash] = useState(false);


  useEffect(() => {

    const timeout = setTimeout(() => setShowSplash(false), timer);

    if (typeof window !== undefined) {

      if (!sessionStorage.getItem('sessionInitialized')) {
        setShowSplash(true);
        // Set session
      } else {
        setShowSplash(false);
        console.log('Session already exists');
      }
      const handleUnload = () => sessionStorage.removeItem('sessionInitialized')

      window.addEventListener("beforeunload", handleUnload);
      
      return () => {
        clearTimeout(timeout)
        handleUnload
      } // Clean up the timeout on unmount

    }

  }, [timer]);



  return (
    <>
      {showSplash &&

        <div className="splash-screen w-[100vw] h-[100vh] ">
          <p className="text-4xl font-normal gap-4 " >
            Ruben Honfovou
            <span className="font-mono font-thin">Portfolio</span>
          </p>
        </div>

      }
    </>
  )
}