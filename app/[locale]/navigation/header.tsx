'use client'
import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { Link } from '@/i18n/routing';
import "../css/navigation.css"
import { useTranslations } from 'next-intl';
import TinyBborder from '../components/tiny-bborder';

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

  

  const t = useTranslations('Navigation');

  // contact button

  const [isShown, setIsShown] = useState(false)

  const handleContact = () => {
    setIsShown(!isShown)
  }

  return (
    <>
      <div className={(isScrolled ? "nav-scrolled" : "") + " nav-container"}>
        <div className="navbar">
          <div className="logo">
            <Link href="/">
              {title}
            </Link>
          </div>
          <div className={(mobileNav == true ? 'm-menu-container' : 'desktop-menu') + " "}>
            <ul className="navlinks flex gap-12 navlinks justify-between align-center ">
              <li className="active">
                <Link href="/#hero">{t('home')}</Link>
              </li>
              {/* <li>
                <Link href="/#skills">{t('about')}</Link>
              </li> */}
              <li>
                <Link href="/#works">{t('works')}</Link>
              </li>
              <li>
                <Link href="/#stack">{t('stack')}</Link>
              </li>
              <li>
                <Link href="/about">{t('about')}</Link>
              </li>
              <li>
                <Link href="/resume">{t('resume')}</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center align-center ">
            <button type="button" onClick={() => handleContact()} className=" hire-me cta">{t('say-hello')}</button>
            <div className={"context-menu " + (mobileNav == true ? "flex" : "none")}>
              <p className="uppercase">{t('say-hello')}</p>
                <span className="tb-container">
                  <Link href="mailto:rubenwhite22@gmail.com" >
                    <span> {t('email-me')}</span>
                    <span>
                      <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="https://wa.me/+22996404757/" >
                    <span>{(t('whatsapp-me'))} </span>
                    <span>
                      <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                      </svg>
                    </span>
                  </Link>
                </span>
              <div className="socials flex gap-4 ">
                <Link href="https://linkedin.com/in/alban-honfovou/" target="blank" >LN</Link>
                <Link href="https://www.facebook.com/alban.honfovou/" target="blank" >FA</Link>
                <Link href="https://wa.me/+22996404757/" target="blank" >WA</Link>
                <Link href="https://github.com/ruben-senpai11" target="blank" >GH</Link>
              </div>
            </div>
            <div className={"bordered " + (isShown ? "flex" : "none")}>
              <TinyBborder >
                <span className="tb-container">
                  <Link href="mailto:rubenwhite22@gmail.com" >
                    <span> {t('email-me')}</span>
                    <span>
                      <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="https://wa.me/+22996404757/" >
                    <span>{(t('whatsapp-me'))} </span>
                    <span>
                      <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
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