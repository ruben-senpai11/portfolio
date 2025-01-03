import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";


export default function Theme() {

  
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark")
    );
  
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const t = useTranslations('Global')

  return (
    <>
      <div className="theme">
      <span onClick={() => handleTheme()}>
          <span className={"checkbox " + (theme == "light" ? "active" : "")} ></span>
          <span className="upppercase">{(t('light'))}</span>
        </span>
        <span onClick={() => handleTheme()}>
          <span className={"checkbox " + (theme == "dark" ? "active" : "")} ></span>
          <span className="upppercase">{(t('dark'))}</span>
        </span>
      </div>
    </>
  )
}