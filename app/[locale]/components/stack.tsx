"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import react from "../assets/favicons/react.png"
import next from "../assets/favicons/next.png"
import express from "../assets/favicons/express-js.png"
import remix from "../assets/favicons/remix.png"
import laravel from "../assets/favicons/laravel.png"
import ts from "../assets/favicons/ts.png"
import js from "../assets/favicons/js.png"
import html from "../assets/favicons/html.png"
import css from "../assets/favicons/css.webp"
import github from "../assets/favicons/github.png"
import gsapLogo from "../assets/favicons/gsap.svg"
import mysql from "../assets/favicons/mysql.png"
import postgresql from "../assets/favicons/postgresql.webp"
import prisma from "../assets/favicons/prisma.webp"
import tailwind from "../assets/favicons/tailwind.png"
import bootstrap from "../assets/favicons/bootstrap.jpeg"
import shopify from "../assets/favicons/shopify.png"
import webflow from "../assets/favicons/webflow.png"
import figma from "../assets/favicons/figma.png"

import Image from "next/image";

interface Props {

}

export default function Stack() {


  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const container = useRef<HTMLElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  function animeGSAP() {
    if (width < 999) {

      useGSAP(() => {

        gsap.to(".stack", {
          x: () => "-" + ((document.querySelector(".stack") as HTMLElement)?.scrollWidth - (document.querySelector(".willAnime") as HTMLElement)?.offsetWidth),
          //x: () => "-2800",
          scrollTrigger: {
            trigger: '.story-3',
            start: 'center center',
            end: () => "+=" + 1.5 * ((document.querySelector(".stack") as HTMLElement)?.scrollWidth),
            //end: () => "+=2800",
            toggleActions: "restart pause reverse pause",
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          }
        });

      }, {});

    } else {

      useGSAP(() => {

        gsap.to(".stack", {
          x: () => "-" + ((document.querySelector(".stack") as HTMLElement)?.offsetWidth - (document.querySelector(".story-3") as HTMLElement)?.offsetWidth),
          scrollTrigger: {
            trigger: '.story-3',
            start: 'center center',
            end: () => "+=" + 1.5 * ((document.querySelector(".stack") as HTMLElement)?.offsetWidth),
            toggleActions: "restart pause reverse pause",
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          }
        });
      }, {});
    }
  }

  animeGSAP()



  return (

    <>
      <div className="willAnime">
        <section ref={container} className="stack ">
          <div className="astack">
            <Image src={html} width={200} height={200} alt="html" />
            <p className="flex">
              HTML
            </p>
          </div>
          <div className="astack">
            <Image src={css} width={200} height={200} alt="css" />
            <p className="flex">
              CSS
            </p>
          </div>
          <div className="astack">
            <Image src={js} width={200} height={200} alt="js" />
            <p className="flex">
              Javascript
            </p>
          </div>
          <div className="astack">
            <Image src={ts} width={200} height={200} alt="ts" />
            <p className="flex">
              Typescript
            </p>
          </div>
          <div className="astack">
            <Image src={express} width={200} height={200} alt="express" />
            <p className="flex">
              ExpressJS
            </p> 
          </div>
          <div className="astack">
            <Image src={laravel} width={200} height={200} alt="laravel" />
            <p className="flex">
              Laravel
            </p>
          </div>
          <div className="astack">
            <Image src={react} width={200} height={200} alt="react" />
            <p className="flex">
              React
            </p>
          </div>
          <div className="astack">
            <Image src={remix} width={200} height={200} alt="remix" />
            <p className="flex">
              Remix
            </p>
          </div>
          <div className="astack">
            <svg viewBox=".5 -.2 1023 1024.1" width="60px" height="60px" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" /><path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" /></svg>
            <p className="flex">
              Next.js
            </p>
          </div>
          <div className="astack">
            <Image src={mysql} width={200} height={200} alt="mysql" />
            <p className="flex">
              MySQL
            </p>
          </div>
          <div className="astack">
            <Image src={postgresql} width={200} height={200} alt="postgresql" />
            <p className="flex">
              PostgreSQL
            </p>
          </div>
          <div className="astack">
            <Image src={prisma} width={200} height={200} alt="prisma" />
            <p className="flex">
              Prisma
            </p>
          </div>
          <div className="astack">
            <Image src={tailwind} width={100} height={100} alt="tailwind" />
            <p className="flex">
              Tailwind
            </p> CSS
          </div>
          <div className="astack">
            <Image src={gsapLogo} width={200} height={200} alt="gsap" />
            <p className="flex">
              GSAP
            </p>
          </div>
          <div className="astack">
            <Image src={figma} width={200} height={200} alt="figma" />
            <p className="flex">
              Figma
            </p>
          </div>
          <div className="astack">
            <Image src={webflow} width={200} height={200} alt="webflow" />
            <p className="flex">
              Webflow
            </p>
          </div>
          <div className="astack">
            <Image src={shopify} width={200} height={200} alt="shopify" />
            <p className="flex">
              Shopify
            </p>
          </div>
          <div className="astack">
            <span>
              <svg viewBox="0 0 98 96" width="60" height="60" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" /></svg>
            </span>
            <p className="flex">
              Github
            </p>
          </div>
        </section>
      </div>
    </>
  )
}