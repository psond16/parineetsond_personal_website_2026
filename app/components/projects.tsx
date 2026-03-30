"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Projects() {

  // ================= HOVER STATE =================
  const [hoveredWord, setHoveredWord] = useState(null);

  const hoverImages = {
    "Sweet-T Bakery": "/sweet-t.png",
    "HTML": "/html.png",
    "CSS": "/css.png",
    "JS": "/js.png",
    "Astro": "/astro.png",
    "Figma": "/figma.png",
    "GitHub": "/github.png",

    "visa process": "/usvisa.png",

    "Django": "/django.png",
    "Python": "/python.png",
    "MySQL": "/mysql.png",
    "REST APIs": "/api.png",
  };

  const handleEnter = (word) => setHoveredWord(word);
  const handleLeave = () => setHoveredWord(null);

  function HoverWord({ children }) {
    return (
      <span
        onMouseEnter={() => handleEnter(children)}
        onMouseLeave={handleLeave}
        className="relative cursor-pointer font-semibold text-neutral-900 underline decoration-dotted underline-offset-4"
      >
        {children}
      </span>
    );
  }

  // ================= PROJECT 1 =================
  const [activeIndex1, setActiveIndex1] = useState(0);
  const ref1 = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scroll1, "change", (v) => {
    if (v < 0.33) setActiveIndex1(0); //image 1
    else if (v < 0.66) setActiveIndex1(1); //image 2
    else setActiveIndex1(2); //image 3
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
    <div className="w-full" id = "projects">

      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 text-center py-4">
        <h1 className="text-5xl font-mono tracking-[0.2em] uppercase text-neutral-800">
          My Projects
        </h1>
      </div>

      {/* ================= HOVER IMAGE OVERLAY ================= */}
      {hoveredWord && hoverImages[hoveredWord] && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] pointer-events-none transition-all duration-300">
          <Image
            src={hoverImages[hoveredWord]}
            alt={hoveredWord}
            width={250}
            height={240}
            className="rounded-xl shadow-2xl opacity-95"
          />
        </div>
      )}

      {/* ================= PROJECT 1 ================= */}
      <div ref={ref1} className="h-[400vh] relative bg-white">

        <div className="sticky top-0 h-screen flex items-center justify-center">

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 px-10">

            <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">

              <Image
                src="/Sweet-T thumbnail.png"
                alt="Sweet-T Bakery"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex1 === 0 ? "opacity-100" : "opacity-0"
                }`}
              />

              <Image
                src="/Sweet-T1.png"
                alt="Sweet-T Bakery 2"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex1 === 1 ? "opacity-100" : "opacity-0"
                }`}
              />

              <Image
                src="/Sweet-T2.png"
                alt="Sweet-T Bakery 3"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex1 === 2 ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="max-w-2xl">


                <p className="text-xl md:text-2xl leading-relaxed text-neutral-800 font-medium">
                  Designed and developed a fully responsive bakery website for{" "}
                  <HoverWord>Sweet-T Bakery</HoverWord>, translating real-world business needs into a clean and accessible frontend interface. Built using{" "}
                  <HoverWord>HTML</HoverWord>, <HoverWord>CSS</HoverWord>,{" "}
                  <HoverWord>JS</HoverWord>, and <HoverWord>Astro</HoverWord>, with a focus on modern UI design, responsive layouts, and branding. Wireframes were created in{" "}
                  <HoverWord>Figma</HoverWord> and implemented using a full{" "}
                  <HoverWord>GitHub</HoverWord> workflow.
                </p>

                <div className="mt-14">
                  <p className="text-sm text-neutral-500 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">HTML</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">CSS</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">JavaScript</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">Astro</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">Figma</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">GitHub</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= PROJECT 2 ================= */}
      <div ref={ref2} className="h-[400vh] relative bg-white">

        <div className="sticky top-0 h-screen flex items-center justify-center">

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 px-10">

            <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">

              <Image
                src="/newFHTC1.png"
                alt="International Journey 1"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex2 === 0 ? "opacity-100" : "opacity-0"
                }`}
              />

              <Image
                src="/newFHTC2.png"
                alt="International Journey 2"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex2 === 1 ? "opacity-100" : "opacity-0"
                }`}
              />

              <Image
                src="/newFHTC3.png"
                alt="International Journey 3"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex2 === 2 ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="max-w-2xl">

   
                <p className="text-xl md:text-2xl leading-relaxed text-neutral-800 font-medium">
                  Built a structured platform guiding international students through{" "}
                  <HoverWord>visa process</HoverWord>, travel planning, and relocation journey. Created 5+ transition stages with checklists and navigation to simplify complex workflows, applying strong UX design principles and user-focused structuring.
                </p>

                <div className="mt-14">
                  <p className="text-sm text-neutral-500 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">HTML</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">CSS</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">JavaScript</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">UX Design</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">Figma</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= PROJECT 3 ================= */}
      <div ref={ref3} className="h-[400vh] relative bg-white">

        <div className="sticky top-0 h-screen flex items-center justify-center">

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 px-10">

            <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">

              <Image
                src="/GCA.png"
                alt="Gamified Chat App 1"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex3 === 0 ? "opacity-100" : "opacity-0"
                }`}
              />

              <Image
                src="/GCA2.png"
                alt="Gamified Chat App 2"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex3 === 1 ? "opacity-100" : "opacity-0"
                }`}
              />

              <Image
                src="/GCA3.png"
                alt="Gamified Chat App 3"
                fill
                className={`object-cover transition-opacity duration-700 ${
                  activeIndex3 === 2 ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="max-w-2xl">

 
                <p className="text-xl md:text-2xl leading-relaxed text-neutral-800 font-medium">
                  Developed backend systems for a gamified chat app using{" "}
                  <HoverWord>Django</HoverWord>, <HoverWord>Python</HoverWord>, and <HoverWord>MySQL</HoverWord>, implementing authentication, streak logic, quests, virtual currency, pet state management, and scalable <HoverWord>REST APIs</HoverWord> for messaging and engagement systems.
                </p>

                <div className="mt-14">
                  <p className="text-sm text-neutral-500 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">Django</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">Python</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">MySQL</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">REST API</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100">GitHub</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}