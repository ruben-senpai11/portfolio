import Link from "next/link"
import "../css/navigation.css"
import { useTranslations } from "next-intl"


function Footer(){

  const f = useTranslations('Navigation')

  const now = new Date()
  const currentYear = now.getFullYear();
  return(
    <>
      <div className="footer flex justify-between gap-10 ">
        <div className="">
          <p>© { currentYear } · <span className="desktopA">{(f('copyright'))}</span></p>
        </div>
        <div className="">
          <p>Made with 🤍 by the white_dev</p>
        </div>
        <div className="socials flex gap-4 ">
          <Link href="https://www.linkedin.com/in/ruben-white22/" target="_blank" >LN</Link>
          <Link href="#" target="_blank" >FA</Link>
          <Link href="https://wa.me/+22996404757/" target="_blank" >WA</Link>
          <Link href="https://github.com/ruben-senpai11" target="_blank" >GH</Link>
        </div>
      </div>
    </>
  )

}



export default Footer