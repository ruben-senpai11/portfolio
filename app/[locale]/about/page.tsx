import BBorder from "./../bborder";
import Footer from "./../navigation/footer";
import Header from "./../navigation/header";
import Image from "next/image";
import "../css/sections.css"

import youngDev from "../assets/img/young_dev.jpeg"
import smilingDev from "../assets/img/smiling_white_dev.jpg"

import "./about.css"
import Stack from "../components/stack";

export default function Page() {


  return (
    <>
      <BBorder >
        <Header title="white_dev" />
        <div className="main ">
          <section className="about flex flex-col gap-16">
            <h1 className="text-[48px] " >About me</h1>
            <div className="flex flex-col gap-20   ">
              <div className="flex justify-center px-[5%]  ">
                <div className="flex justify-between story-1 ">
                  <div className="a-description w-[60%] ">
                    <h2>1. The Beggining</h2>
                    {/* <p>You may have noticed, even though I claim to be a frontend dev, I have a full's stack.</p> */}
                    <p >I printed my first <span className="font-mono bg-zinc-300 m-1 p-1 " >Hello World!</span> 5 years ago. It was in python,
                      and then with my electronic background, I was entirely focused on robotic with Arduino these years </p>
                    <p>I've learned Python after it and was inducted to web development on school</p>
                    <p>When I think of it , it was a huge way to arrive here. I've been through many technologies, and defintely found myself in frontend development and web design</p>
                  </div>
                  <div className=" a-picture flex items-center ">
                    <Image src={youngDev} width={400} height={400} alt="young white_dev" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center story-2 gap-8 py-8 ">
                <div className="a-description ">
                  <h2>2. Transition</h2>
                  {/* <p>You may have noticed, even though I claim to be a frontend dev, I have a full's stack.</p> */}
                  <p>As most of devs, I've started this work looking to have geographic liberty and a way to use creativity,
                    but I had to throw myself in professionnal life to see what it really is</p>
                  <p>Even though I have experience in building applications from A to Z, the most expectative the project is about
                    creativity, User Interface & Experience, the more comfortable I am</p>

                  <p>Then, since my 2 last jobs, I decided to specialize myself as frontend.</p>
                  <p> This is the perfect job ror me, it enhance my productivity and I enjoy it like a kid</p>
                </div>
              </div>

              <div className="flex justify-center px-[0%]  ">
                <div className="flex justify-between story-1 story-3 ">
                  <div className="">
                    <h2>3. My Stack</h2>
                    {/* <Stack /> */}
                  </div>
                </div>
              </div>


              <div className="flex flex-col items-center story-2 gap-8 py-4 ">
                <div className="a-description ">
                  <h2>4. Waiting for you !</h2>
                  <p>All I aim now is use all these skills and learn more with you
                    Programming is all I love and honnestly, I can't wait to work with you.</p>
                  <p>I may be your goldmine, promised 😇</p>           
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