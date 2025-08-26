"use client"
import { ReactNode, useEffect, useState } from "react";

interface Props {
  name: string
  label: string
  timer: number,
}

export default function SplashScreen({ name, label, timer }: Props) {

  const [showSplash, setShowSplash] = useState(false);


  useEffect(() => {

    const timeout = setTimeout(() => setShowSplash(false), timer);

    if (typeof window !== undefined) {

      if (!sessionStorage.getItem('sessionInitialized')) {
        setShowSplash(true);
        // Set session
      } else {
        setShowSplash(false);
        //console.log('Session already exists');
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

        <div className="splash-screen w-[100vw] h-[100vh] bg-gradientt">
          <p className="flex flex-col gap-8 p-4 " >
            {/* <span className="text-6xl font-mono font-extrabold m-1 text-gradientt">UIX Developer <span className="font-sans bg-gradienft font-extrabold">{"</>"}</span> </span> */}
            <span className="text-3xl font-normal text-center text-wrap">
              {name}
              <span className="font-mono font-thin"> {label}</span>
            </span>
          </p>
        </div>

      }
    </>
  )
}