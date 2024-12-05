"use client"
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

interface Props {
  language: string
  theme: string
}


export default function Language() {

  const localActive = useLocale();

  const [language, setLanguage] = useState(localActive);

  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const searchParams = useSearchParams(); // Get current query parameters


  const handleLanguage = (newLanguage: string) => {

    setLanguage(newLanguage)

    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLanguage;

    const newPathname = `/${segments.join("/")}`;
    const params = searchParams.toString();

    const newUrl = `${newPathname}${params ? `?${params}` : ""}`;

    // console.log(newUrl);
    router.replace(newUrl);
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