import { useEffect, useState } from "react";


export default function Theme() {

  
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
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


  return (
    <>
      <div className="theme">
      <span onClick={() => handleTheme()}>
          <span className={"checkbox " + (theme == "light" ? "active" : "")} ></span>
          <span className="upppercase">light</span>
        </span>
        <span onClick={() => handleTheme()}>
          <span className={"checkbox " + (theme == "dark" ? "active" : "")} ></span>
          <span className="upppercase">dark</span>
        </span>
      </div>
    </>
  )
}