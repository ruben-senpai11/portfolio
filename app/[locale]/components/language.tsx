
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
    setLoading(true); // Start showing the spinner
    //  await new Promise((resolve) => setTimeout(resolve, 30000)); 
    setLanguage(newLanguage); // Update local state
    console.log("New languauge loading");

    // Prepare the new URL
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLanguage;

    const newPathname = `/${segments.join("/")}`;
    const params = searchParams.toString();
    const newUrl = `${newPathname}${params ? `?${params}` : ""}`;

    router.replace(newUrl);

    const checkUrlChanged = () =>
      window.location.pathname.startsWith(`/${newLanguage}`);

    while (!checkUrlChanged()) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    setLoading(false);
  };


  return (
    <>
      <div className="language">
        {loading && (
          <span className="loading-spinner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              width="16"
              height="16"
              style={{ display: 'block', shapeRendering: 'auto' }}
            >
              <g data-idx="1">
                <path
                  strokeLinejoin="miter"
                  strokeWidth="10"
                  fill="none"
                  d="M30 20l50 0l0 60l-60 0l0 -60l10 0"
                  data-idx="2"
                ></path>
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="10"
                  fill="none"
                  d="M30 20l50 0l0 60l-60 0l0 -60l10 0"
                  data-idx="3"
                  strokeDasharray="71.6802px, 158.32px"
                  strokeDashoffset="-230.4px"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="-230.4"
                    to="0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </svg>

          </span>
        )}
        <>
          <span onClick={() => handleLanguage("en")} className={loading ? "opacity-45" : ""} >
            <span className={"checkbox " + (language === "en" ? "active" : "")}></span>
            <span className="uppercase">EN</span>
          </span>
          <span onClick={() => handleLanguage("fr")} className={loading ? "opacity-45" : ""} >
            <span className={"checkbox " + (language === "fr" ? "active" : "")}></span>
            <span className="uppercase">FR</span>
          </span>
        </>
        {/* )} */}
      </div>
    </>
  );
}
