import BBorder from "./../bborder";
import Footer from "./../navigation/footer";
import Header from "./../navigation/header";
import Image from "next/image";
import "../css/sections.css"

import youngDev from "../assets/img/young_dev.jpg"
import smilingDev from "../assets/img/smiling_white_dev.jpg"

import "./about.css"
import Stack from "../components/stack";
import { useTranslations } from "next-intl";

export default function Page() {

  const a = useTranslations("AboutPage");

  return (
    <>
      <BBorder >
        <Header title="white_dev" />
        <div className="main pb-16">
          <section className="about flex flex-col gap-16">
            <h1 className="text-[48px] " >{(a('title'))}</h1>
            <div className="flex flex-col gap-20   ">
              <div className="flex justify-center px-[5%]  ">
                <div className="flex justify-between story-1 ">
                  <div className="a-description w-[60%] ">
                    <h2>1. {(a('part1.title'))}</h2>
                    {/* <p>You may have noticed, even though I claim to be a frontend dev, I have a full's stack.</p> */}
                    <p>{(a('part1.p1-a'))}<span className="font-mono bg-zinc-300 m-1 p-1 bg-text" >Hello World!</span> {(a('part1.p1-b'))}</p>
                    <p>{(a('part1.p2'))}</p>
                    <p>{(a('part1.p3'))}</p>
                  </div>
                  <div className=" a-picture flex items-center ">
                    <Image src={youngDev} width={400} height={400} alt="young white_dev" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center story-2 gap-8 py-8 ">
                <div className="a-description ">
                  <h2>2. {(a('part2.title'))}</h2>
                  {/* <p>You may have noticed, even though I claim to be a frontend dev, I have a full's stack.</p> */}
                  <p>{(a('part2.p1'))}</p>
                  <p>{(a('part2.p2'))}</p>
                </div>
              </div>

              <div className="flex justify-center px-[5%]  ">
                <div className="flex justify-between story-1 story-3 ">
                  <div className="">
                    <h2>3. {(a('part3.title'))}</h2>
                    {/* <Stack /> */}
                  </div>
                </div>
              </div>


              <div className="flex flex-col items-center story-2 gap-8 py-4 ">
                <div className="a-description ">
                  <h2>4. {(a('part4.title'))}</h2>
                  <p>{(a('part4.p1'))}</p>
                  <p>{(a('part4.p2'))}</p>
                  <p>{(a('part4.p3'))}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </BBorder>
    </>
  )
}