import { useEffect, useState } from "react";

interface Props {
  lightColors: any,
  darkColors: any
}

export default function Background({ lightColors, darkColors }: Props) {


  const [background, setBackground] = useState<string>(
    localStorage.getItem("background") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.body.setAttribute("data-background", background);
    localStorage.setItem("background", background);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newbackground = e.matches ? "dark" : "light";
      setBackground(newbackground);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [background]);

  const handleBackground = (newbackground: string) => {
    setBackground(newbackground);
  };


  return (
    <>
      <div className="background-color ">
        {darkColors.map((color: string, index: number) => (
          <span key={index} onClick={() => handleBackground(color)} help-text={color} >
            <span className={"checkbox " + color + (background == color ? " current-color" : "")} ></span>
          </span>
        ))}
      </div>
    </>
  )
}