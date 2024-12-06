import { useEffect, useState } from "react";


export default function Theme() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") as string || "light"
  );

  const handleTheme = (newTheme:string)=>{  
    setTheme(newTheme)
  }

  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const userTheme:string = localStorage.getItem("theme") as string;
    document.querySelector('html')?.setAttribute('data-theme', userTheme)
  }, [theme])

  return (
    <>

      <div className="theme">

      <span onClick={() => handleTheme("light")}>
          <span className={"checkbox " + (theme == "light" ? "active" : "")} ></span>
          <span className="upppercase">light</span>
        </span>


        <span onClick={() => handleTheme("dark")}>
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