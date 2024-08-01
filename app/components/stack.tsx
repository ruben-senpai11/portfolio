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


  const container = useRef<HTMLElement>(null);


  gsap.registerPlugin(ScrollTrigger);

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
  },);

  return (

    <>
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
            Express
          </p> JS
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
          <Image src={next} width={200} height={200} alt="next" />
          <p className="flex">
            Next
          </p>.js
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
          <Image src={tailwind} width={200} height={200} alt="tailwind" />
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
          <Image src={github} width={200} height={200} alt="github" />
          <p className="flex">
            Github
          </p>
        </div>
      </section>
    </>
  )
}