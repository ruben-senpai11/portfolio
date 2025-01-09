'use client'
import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { Link } from '@/i18n/routing';
import "../css/navigation.css"
import { useTranslations } from 'next-intl';
import TinyBborder from '../components/tiny-bborder';
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    // Check if the pathname has changed
    // console.log("path", pathname);  
    //  console.log("prev Path", prevPathname);
    if (prevPathname !== pathname) {
      // handleLoading
      setPrevPathname(pathname); // Update the previous pathname
    }
  }, [pathname]); // Dependencies are pathname and prevPathname

  const handleLoading = async () => {
    setLoading(true); // Start showing the spinner
    setNavFalse
    //  await new Promise((resolve) => setTimeout(resolve, 30000)); 

    const newPathname = window.location.pathname
    console.log("new path", newPathname);


    const checkUrlChanged = () => pathname !== newPathname;

    while (!checkUrlChanged()) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    setLoading(false);
  };


  return (
    <>
      {loading &&
        <div className="loading-gif">

          <span className="loading-spinner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              width="70"
              height="70"
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
              <li onClick={() => { setNavFalse }} className="active">
                <Link href="/#hero">{t('home')}</Link>
              </li>
              {/* <li>
                <Link href="/#skills">{t('about')}</Link>
              </li> */}
              <li onClick={() => { setNavFalse }}>
                <Link href="/#works">{" "}{t('works')}</Link>
              </li>
              <li onClick={() => { setNavFalse }}>
                <Link href="/portfolio">{" "}{t('portfolio')}</Link>
              </li>
              <li onClick={() => { setNavFalse }}>
                <Link href="/about">{" "}{t('about')}</Link>
              </li>
              {/* <li onClick={() => { setNavFalse }}>
                <Link href={(t('resume-link'))}>{" "}{t('resume')}</Link>
              </li> */}
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
                <Link href="https://www.facebook.com/alban.honfovou/" target="_blank" >FA</Link>
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