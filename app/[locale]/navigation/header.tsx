'use client'
import { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';
import "../css/navigation.css"
import { useTranslations } from 'next-intl';
import TinyBborder from '../components/tiny-bborder';
import { usePathname } from "next/navigation";

interface Props {
  title: string
}

function Header({ title }: Props) {

  //Mobile Nav
  const [mobileNav, setmobileNav] = useState(false);

  const toogleMenu = () => {
    if (mobileNav == false) {
      setmobileNav(true)
    } else {
      setmobileNav(false)
    }
  }

  const setNavFalse = () => {
    setmobileNav(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  //  Scroll Trigger
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  // contact button

  const [isShown, setIsShown] = useState(false)

  const handleContact = () => {
    setIsShown(!isShown)
  }

  //  import text content
  const t = useTranslations('Navigation');


  //  Loading Gif

  const [loading, setLoading] = useState(false); // New loading state

  const pathname = usePathname(); // Get the current pathname
  //console.log(pathname);
  const currentPage = pathname.split('/').filter(Boolean).pop();
  //console.log(currentPage);


  const [documentLoaded, setDocumentLoaded] = useState(false);

  const handleDocumentLoad = () => {
    if (document.readyState === 'complete') {
      setDocumentLoaded(true);
      setLoading(false)
    }
  };

  useEffect(() => {

    if (document.readyState === 'complete') {
      setDocumentLoaded(true);
      setLoading(false)
    } else {
      window.addEventListener('load', handleDocumentLoad);
    }

    return () => window.removeEventListener('load', handleDocumentLoad);
  }, []);


  const handlePage = (newPage: string) => {
    setNavFalse
    if (newPage == "home" && currentPage !== "en" || newPage == "home" && currentPage !== "fr") {}
    else if (newPage !== currentPage ){
      setLoading(true)
    }
    // setLoading(true)
  }


  return (
    <>
      {loading &&
          <div className="loading-line">
            <div className="loading-fulfiller"></div>
          </div>
      }
      <div className={(isScrolled ? "nav-scrolled" : "") + " nav-container"}>
        <div className="navbar">
          <div className="logo">
            <Link href="/">
              {title}
            </Link>
          </div>
          <div className={(mobileNav == true ? 'm-menu-container' : 'desktop-menu') + " "}>
            <ul className="navlinks flex gap-12 navlinks justify-between align-center ">
              <li className={currentPage == "en" || currentPage == "fr" ? "active" : ""}>
                <Link onClick={() => { handlePage("home") }} href="/">{t('home')}</Link>
              </li>
              <li className={currentPage == "about" ? "active" : ""}>
                <Link onClick={() => { handlePage("about") }} href="/about">{" "}{t('about')}</Link>
              </li>
              <li className={currentPage == "portfolio" ? "active" : ""}>
                <Link onClick={() => { handlePage("portfolio") }} href="/portfolio">{" "}{t('portfolio')}</Link>
              </li>
              <li className={currentPage == "resume" ? "active" : ""}>
                <Link onClick={() => { setNavFalse }} href={(t('resume-link'))} target='_blank' >{" "}{t('resume')}</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center align-center ">
            <button type="button" onClick={() => handleContact()} className=" hire-me btn cta">
              <span className="cta-text flex gap-4">
                {t('say-hello')}
              </span>
              <span className="cta-transition">
                <span className="inverted-color"></span>
                <span className="current-color"></span>
              </span>
            </button>
            <div className={"context-menu " + (mobileNav == true ? "flex" : "none")}>
              <p className="uppercase">{t('say-hello')}</p>
              <span className="tb-container">
                <Link href="mailto:rubenwhite22@gmail.com" >
                  <span> {t('email-me')}</span>
                  <span>
                    <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                    </svg>
                  </span>
                </Link>
                <Link href="https://wa.me/+22996404757/" >
                  <span>{(t('whatsapp-me'))} </span>
                  <span>
                    <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                    </svg>
                  </span>
                </Link>
              </span>
              <div className="socials flex gap-4 ">
                <Link href="https://www.linkedin.com/in/ruben-white22/" target="_blank" >LN</Link>
                <Link href="#" target="_blank" >FA</Link>
                <Link href="https://wa.me/+22996404757/" target="_blank" >WA</Link>
                <Link href="https://github.com/ruben-senpai11" target="_blank" >GH</Link>
              </div>
            </div>
            <div className={"bordered " + (isShown ? "flex" : "none")}>
              <TinyBborder >
                <span className="tb-container">
                  <Link href="mailto:rubenwhite22@gmail.com" >
                    <span> {t('email-me')}</span>
                    <span>
                      <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="https://wa.me/+22996404757/" >
                    <span>{(t('whatsapp-me'))} </span>
                    <span>
                      <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                      </svg>
                    </span>
                  </Link>
                </span>
              </TinyBborder>
            </div>
          </div>
          <div className={(mobileNav === true ? "opened " : "") + "menu-icons relative"} onClick={toogleMenu}>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Header;