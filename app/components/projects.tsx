"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Projects() {

  // ================= PROJECT 1 =================
  const [activeIndex1, setActiveIndex1] = useState(0);
  const ref1 = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scroll1, "change", (v) => {
    if (v < 0.33) setActiveIndex1(0);
    else if (v < 0.66) setActiveIndex1(1);
    else setActiveIndex1(2);
  });

  // ================= PROJECT 2 =================
  const [activeIndex2, setActiveIndex2] = useState(0);
  const ref2 = useRef(null);

  const { scrollYProgress: scroll2 } = useScroll({
    target: ref2,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scroll2, "change", (v) => {
    if (v < 0.33) setActiveIndex2(0);
    else if (v < 0.66) setActiveIndex2(1);
    else setActiveIndex2(2);
  });

  // ================= PROJECT 3 =================
  const [activeIndex3, setActiveIndex3] = useState(0);
  const ref3 = useRef(null);

  const { scrollYProgress: scroll3 } = useScroll({
    target: ref3,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scroll3, "change", (v) => {
    if (v < 0.33) setActiveIndex3(0);
    else if (v < 0.66) setActiveIndex3(1);
    else setActiveIndex3(2);
  });

  return (
    <div className="w-full">

      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-50 bg-white text-center py-6">
        <h1 className="text-3xl font-bold">My Projects</h1>
      </div>

      {/* ================= PROJECT 1 ================= */}
      <div ref={ref1} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="w-full max-w-6xl grid grid-cols-2 gap-6">

            <div className="relative w-full h-[500px] overflow-hidden">
              <Image src="/Sweet-T thumbnail.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex1 === 0 ? "opacity-100" : "opacity-0"}`} />
              <Image src="/Sweet-T1.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex1 === 1 ? "opacity-100" : "opacity-0"}`} />
              <Image src="/Sweet-T2.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex1 === 2 ? "opacity-100" : "opacity-0"}`} />
            </div>

            <div className="flex items-center">
              <p>
              Designed and coded frontend interface for a local bakery website using HTML, Tailwind CSS, JavaScript, and Astro. • Translated the bakery owner’s requirements into interactive page layouts and responsive UI components. • Created wireframes and prototypes in Figma, then implementing them into production-ready code. • Managed code with Git/GitHub, reviewing pull requests, and ensuring consistent styling and accessibility across the site.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= PROJECT 2 ================= */}
      <div ref={ref2} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="w-full max-w-6xl grid grid-cols-2 gap-6">

            <div className="relative w-full h-[400px] overflow-hidden">
              <Image src="/FHTC1.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex2 === 0 ? "opacity-100" : "opacity-0"}`} />
              <Image src="/FHTC2.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex2 === 1 ? "opacity-100" : "opacity-0"}`} />
              <Image src="/FHTC3.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex2 === 2 ? "opacity-100" : "opacity-0"}`} />
            </div>

            <div className="flex items-center">
              <p>
              Designed and developed a website guiding 100+ potential international students annually through visa, travel, and relocation timelines. Created 5+ transition stages with checklists and organized navigation to simplify complex preparation processes. Built wireframes and implemented frontend features using HTML, CSS, and JavaScript, applying UX design principles
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= PROJECT 3 ================= */}
      <div ref={ref3} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="w-full max-w-6xl grid grid-cols-2 gap-6">

            <div className="relative w-full h-[400px] overflow-hidden">
              <Image src="/GCA.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex3 === 0 ? "opacity-100" : "opacity-0"}`} />
              <Image src="/GCA2.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex3 === 1 ? "opacity-100" : "opacity-0"}`} />
              <Image src="/GCA3.png" fill className={`object-cover transition-opacity duration-700 ${activeIndex3 === 2 ? "opacity-100" : "opacity-0"}`} />
            </div>

            <div className="flex items-center">
              <p>
              • Developed backend features using Django, Python, and MySQL, including database models, APIs, authentication, and core game logic. • Contributed around 5 merged code updates per week through Git/GitHub and coordinated with 2 frontend developers for smooth integration. • Assisted with feature planning and designing backend systems for daily tasks and gamified user interactions.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}