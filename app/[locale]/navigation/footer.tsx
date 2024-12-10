import Link from "next/link"
import "../css/navigation.css"
import { useTranslations } from "next-intl"


function Footer(){

  const f = useTranslations('Navigation')

  return(
    <>
      <div className="footer flex justify-between gap-10 ">
        <div className="">
          <p>© 2024 · <span className="desktopA">{(f('copyright'))}</span></p>
        </div>
        <div className="">
          <p>Made with 🤍 by the white_dev</p>
        </div>
        <div className="socials flex gap-4 ">
          <Link href="linkedin.com/in/alban-honfovou/" target="blank" >LN</Link>
          <Link href="https://www.facebook.com/alban.honfovou/" target="blank" >FA</Link>
          <Link href="https://wa.me/+22996404757/" target="blank" >WA</Link>
          <Link href="https://github.com/ruben-senpai11" target="blank" >GH</Link>
        </div>
      </div>
    </>
  )

}



export default Footer