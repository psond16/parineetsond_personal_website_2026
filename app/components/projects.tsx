"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  images: string[];
};

const projects: Project[] = [
  {
    title: "Sweet-T Bakery",
    subtitle: "Frontend website for a local bakery",
    description:
      "Designed and developed a fully responsive bakery website by translating real business needs into a clean, warm, and accessible frontend experience. I worked with layout, branding, responsive design, wireframes, and GitHub-based version control.",
    tech: ["HTML", "CSS", "JavaScript", "Astro", "Figma", "GitHub"],
    images: ["/Sweet-T thumbnail.png", "/Sweet-T1.png", "/Sweet-T2.png"],
  },
  {
    title: "International Student Journey",
    subtitle: "A guide for international students",
    description:
      "Built a structured platform to help international students understand the visa process, travel planning, and relocation journey. The project organizes a complicated experience into clear stages, checklists, and user-friendly navigation.",
    tech: ["HTML", "CSS", "JavaScript", "UX Design", "Figma"],
    images: ["/newFHTC1.png", "/newFHTC2.png", "/newFHTC3.png"],
  },
  {
    title: "Gamified Chat App",
    subtitle: "Backend systems for an interactive chat app",
    description:
      "Developed backend systems for a gamified chat app with authentication, streak logic, quests, virtual currency, pet state management, and REST APIs for messaging and engagement features.",
    tech: ["Django", "Python", "MySQL", "REST APIs", "GitHub"],
    images: ["/GCA.png", "/GCA2.png", "/GCA3.png"],
  },
];

function ProjectImageCarousel({ project }: { project: Project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function showNextImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function showPreviousImage() {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="relative">
      <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-md">
        <Image
          src={project.images[activeImageIndex]}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={showPreviousImage}
          className="h-10 w-10 rounded-full border border-neutral-300 text-lg shadow-sm active:scale-95 transition"
          aria-label="Previous project image"
        >
          ←
        </button>

        <div className="flex gap-2">
          {project.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeImageIndex === index ? "bg-[#77001E]" : "bg-neutral-300"
              }`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={showNextImage}
          className="h-10 w-10 rounded-full border border-neutral-300 text-lg shadow-sm active:scale-95 transition"
          aria-label="Next project image"
        >
          →
        </button>
      </div>
    </div>
  );
}

function MobileProjects() {
  return (
    <div className="md:hidden px-6">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-green-700">
          selected work
        </p>

        <h1 className="mt-3 text-5xl font-bold font-mono uppercase tracking-tighter text-neutral-800 leading-none">
          My
          <br />
          Projects
        </h1>

        <p className="mt-5 font-mono text-sm leading-relaxed text-neutral-600">
          A few things I’ve built while exploring design, code, and real-world
          problem solving.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-xl"
          >
            <ProjectImageCarousel project={project} />

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#77001E]">
                Project 0{index + 1}
              </p>

              <h2 className="mt-2 text-3xl font-bold font-playfair text-neutral-900">
                {project.title}
              </h2>

              <p className="mt-1 font-handwriting text-2xl text-neutral-700">
                {project.subtitle}
              </p>

              <p className="mt-4 font-mono text-sm leading-relaxed text-neutral-700">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-mono text-neutral-700"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function DesktopProjects() {
  return (
    <div className="hidden md:block px-10 lg:px-24">
      <div className="mx-auto max-w-6xl text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm uppercase tracking-[0.35em] text-green-700"
        >
          selected work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-6xl lg:text-7xl font-mono font-bold uppercase tracking-[0.15em] text-neutral-800"
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-neutral-600"
        >
          A collection of projects where I combined design, frontend
          development, backend logic, and user-focused problem solving.
        </motion.p>
      </div>

      <div className="mx-auto max-w-6xl space-y-28">
        {projects.map((project, index) => {
          const reverseLayout = index % 2 === 1;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* IMAGE SIDE */}
              <div className={reverseLayout ? "md:order-2" : ""}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative col-span-2 h-[360px] overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} main preview`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="50vw"
                    />
                  </div>

                  <div className="relative h-[150px] overflow-hidden rounded-2xl bg-neutral-100 shadow-lg">
                    <Image
                      src={project.images[1]}
                      alt={`${project.title} second preview`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="25vw"
                    />
                  </div>

                  <div className="relative h-[150px] overflow-hidden rounded-2xl bg-neutral-100 shadow-lg">
                    <Image
                      src={project.images[2]}
                      alt={`${project.title} third preview`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT SIDE */}
              <div className={reverseLayout ? "md:order-1" : ""}>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#77001E]">
                  Project 0{index + 1}
                </p>

                <h2 className="mt-4 text-5xl lg:text-6xl font-playfair font-bold text-neutral-900 leading-tight">
                  {project.title}
                </h2>

                <p className="mt-3 font-handwriting text-4xl text-neutral-700">
                  {project.subtitle}
                </p>

                <p className="mt-7 max-w-xl font-mono text-base leading-relaxed text-neutral-700">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-mono text-neutral-700 shadow-sm"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-white pt-28 md:pt-36 pb-24 md:pb-32"
    >
      <MobileProjects />
      <DesktopProjects />
    </section>
  );
}