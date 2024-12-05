"use client"
import { useRouter } from "next/router";
import { useState } from "react"

interface Props {
  language: string
  theme: string
}


export default function Language() {
  
  const [language, setLanguage] = useState("en");
  
  const handleLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
  }
  
  return (
    <>
      <div className="language">
        <span onClick={() => handleLanguage("en")}>
          <span className={"checkbox " + (language == "en" ? "active" : "")} ></span>
          <span className="upppercase">EN</span>
        </span>
        <span onClick={() => handleLanguage("fr")}>
          <span className={"checkbox " + (language == "fr" ? "active" : "")} ></span>
          <span className="upppercase">FR</span>
        </span>
      </div>
    </>
  )
}