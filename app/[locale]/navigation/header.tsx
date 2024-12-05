'use client'
import { useEffect, useState } from 'react';
import ThemeMode from '../components/themeMode';
import { ChangeEvent } from 'react';
import {Link} from '@/i18n/routing';
import "./navigation.css"
import { useTranslations } from 'next-intl';

interface Props {
  title: string
}

function Header({ title }: Props) {
  const [searchInput, setsearchInput] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setsearchInput(event.target.value)
  }
  const searchIcon = (<svg width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>);


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



  return (
    <>
      <div className={ (isScrolled ? "nav-scrolled" : "") + " nav-container" }>
        <div className="navbar">
          <div className="logo">
            <Link href="/">
              {title}
            </Link>
          </div>
          <div className={(mobileNav == true ? 'mobile-menu' : 'desktop-menu') + " "}>
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
            <button type="button" className={(mobileNav == true ? 'm-hire' : '') + " hire-me cta"}>{t('hire-me')}</button>
          </div>
          <div className={(mobileNav === true ? "opened " : "") + "menu-icons relative"} onClick={toogleMenu}>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;