
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  language: string;
  theme: string;
}

export default function Language() {
  const localActive = useLocale();
  const [language, setLanguage] = useState(localActive);
  const [loading, setLoading] = useState(false); // New loading state

  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const searchParams = useSearchParams(); // Get current query parameters

  const handleLanguage = async (newLanguage: string) => {
    setLoading(true);
    console.log("Languauge loading");
    setLanguage(newLanguage);

    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLanguage;

    const newPathname = `/${segments.join("/")}`;
    const params = searchParams.toString();
    const newUrl = `${newPathname}${params ? `?${params}` : ""}`;

    console.log("newPath", newPathname);



    await new Promise((resolve) => setTimeout(resolve, 1000)); // 300ms delay

    requestAnimationFrame(() => {
      router.replace(newUrl);
      setLoading(false);
    });

    setLoading(false);
  };



  return (
    <>
      <div className="language">
        {loading ? ( // Show loading GIF if in loading state
          <span className="loading-spinner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="16" height="16" ><g data-idx="1"><path strokeLinejoin="miter" strokeWidth="10" fill="none" stroke="currentColor" d="M30 20l50 0l0 60l-60 0l0 -60l10 0" data-idx="2"></path>
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="10" fill="none" stroke="#ffffff" d="M30 20l50 0l0 60l-60 0l0 -60l10 0" data-idx="3" strokeDasharray="31.6802px, 208.32px" strokeDashoffset="-230.4px">
              </path><g data-idx="6"></g></g></svg>
          </span>
        ) : (
          <>
            <span onClick={() => handleLanguage("en")}>
              <span className={"checkbox " + (language === "en" ? "active" : "")}></span>
              <span className="uppercase">EN</span>
            </span>
            <span onClick={() => handleLanguage("fr")}>
              <span className={"checkbox " + (language === "fr" ? "active" : "")}></span>
              <span className="uppercase">FR</span>
            </span>
          </>
        )}
      </div>
    </>
  );
}
