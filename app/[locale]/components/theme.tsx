import { useEffect, useState } from "react";


export default function Theme() {

  
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
    console.log(theme);
  
  useEffect(() => {
    // Apply the theme to the document body
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Listener for system theme changes
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


        {/* <span>
          <Checkbox label="Light" isChecked={true} />
        </span>
        <span>
          <Checkbox label="Dark" isChecked={false} />
        </span> */}
      </div>
    </>
  )
}