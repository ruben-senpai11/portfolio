import Link from "next/link"
import "./navigation.css"


function Footer(){

  return(
    <>
      <div className="footer flex justify-between gap-10 ">
        <div className="">
          <p>© 2024 · All Rights Reserved</p>
        </div>
        <div className="">
          <p>Made with 🤍 by the white_dev</p>
        </div>
        <div className="socials flex gap-4 ">
          <Link href="" target="blank" >LN</Link>
          <Link href="" target="blank" >FA</Link>
          <Link href="" target="blank" >WA</Link>
          <Link href="" target="blank" >GH</Link>
        </div>
      </div>
    </>
  )

}



export default Footer