"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description: string[];
  lesson: string;
  image: string;
  caption: string;
  objectPosition: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Sweet-T Bakery",
    date: "Sept - Dec 2025",
    description: [
      "Designed and coded a responsive frontend for a local bakery website.",
      "Translated real business needs into clean layouts, branding, and interactive UI.",
      "Created wireframes in Figma and implemented the final design with Astro, HTML, CSS, and JavaScript.",
    ],
    lesson:
      "Turning someone’s vision into a real interface people can actually use.",
    image: "/Sweet-T2.png",
    caption: "first real client build",
    objectPosition: "center center",
  },
  {
    title: "Student Usher",
    company: "Credit Union 1 Arena",
    date: "Jan - Present",
    description: [
      "Helped guests with seating, directions, ticket verification, and event flow.",
      "Stayed calm and helpful during busy events with lots of people asking questions.",
    ],
    lesson:
      "Staying calm, clear, and people-focused even when things get busy.",
    image: "/CU1.png",
    caption: "people skills in action",
    objectPosition: "center center",
  },
  {
    title: "Dev Mentor",
    company: "WiCS",
    date: "Feb - Present",
    description: [
      "Supported students with Git, HTML, CSS, JavaScript, and web development basics.",
      "Helped debug code and explained technical concepts in beginner-friendly ways.",
      "Practiced breaking down confusing problems into simple next steps.",
    ],
    lesson:
      "Explaining code simply is one of the best ways to understand it better.",
    image: "/mentor.png",
    caption: "teaching + growing",
    objectPosition: "center center",
  },
];

const nextSteps = [
  "building better web experiences",
  "growing as a software engineer",
  "taking on more leadership",
];

function SectionHeader() {
  return (
    <div className="px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-green-700"
      >
        small steps, real growth
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-5xl md:text-7xl font-playfair font-bold text-neutral-900"
      >
        My Journey
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-3 font-handwriting text-3xl md:text-4xl text-[#77001E]"
      >
        so far...
      </motion.p>
    </div>
  );
}

function MobileJourney() {
  return (
    <div className="md:hidden mt-14 px-6">
      <div className="relative">
        {/* Mobile vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#77001E]/30" />

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative pl-9"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#77001E] border-[3px] border-[#fffaf7]" />

              <div className="rounded-3xl bg-white border border-red-100 shadow-xl p-5">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-green-700">
                  {experience.date}
                </p>

                <h2 className="mt-3 text-3xl font-playfair font-bold text-neutral-900">
                  {experience.title}
                </h2>

                <p className="mt-1 font-handwriting text-2xl text-[#77001E]">
                  {experience.company}
                </p>

                <div className="mt-5 bg-white p-2 pb-8 rounded-lg shadow-md">
                  <div className="relative h-[180px] w-full overflow-hidden rounded-md bg-neutral-100">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: experience.objectPosition }}
                      sizes="100vw"
                    />
                  </div>

                  <p className="mt-3 text-center font-handwriting text-xl text-neutral-800">
                    {experience.caption}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 font-mono text-sm leading-relaxed text-neutral-700">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#77001E]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl bg-[#fffaf7] border border-red-100 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#77001E]">
                    what it taught me
                  </p>
                  <p className="mt-2 font-mono text-sm leading-relaxed text-amber-950">
                    {experience.lesson}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Mobile Next Stop */}
          <motion.article
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative pl-9"
          >
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-green-700 border-[3px] border-[#fffaf7]" />

            <div className="rounded-3xl bg-[#77001E] text-white shadow-xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                next stop
              </p>

              <h2 className="mt-3 font-playfair text-3xl font-bold">
                More building.
                <br />
                More learning.
              </h2>

              <ul className="mt-5 space-y-2 font-mono text-sm">
                {nextSteps.map((step) => (
                  <li key={step} className="flex gap-2">
                    <span>→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}

function DesktopJourney() {
  return (
    <div className="hidden md:block mt-24 px-10 lg:px-24">
      <div className="relative mx-auto max-w-6xl">
        {/* Center timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-[#77001E]/30" />

        <div className="space-y-28">
          {experiences.map((experience, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <motion.article
                key={experience.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="relative grid grid-cols-[1fr_90px_1fr] items-center gap-8"
              >
                {/* Timeline dot and date */}
                <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf7] border border-[#77001E]/30 shadow-md">
                  <div className="h-4 w-4 rounded-full bg-[#77001E]" />
                </div>

                {/* LEFT SIDE */}
                <div>
                  {imageOnLeft ? (
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mx-auto max-w-[360px] bg-white p-3 pb-12 rounded-xl shadow-2xl -rotate-2"
                    >
                      <div className="relative h-[260px] w-full overflow-hidden rounded-lg bg-neutral-100">
                        <Image
                          src={experience.image}
                          alt={experience.title}
                          fill
                          className="object-cover"
                          style={{
                            objectPosition: experience.objectPosition,
                          }}
                          sizes="360px"
                        />
                      </div>

                      <p className="mt-4 text-center font-handwriting text-2xl text-neutral-800">
                        {experience.caption}
                      </p>
                    </motion.div>
                  ) : (
                    <JourneyCard experience={experience} index={index} />
                  )}
                </div>

                {/* CENTER SPACE */}
                <div />

                {/* RIGHT SIDE */}
                <div>
                  {imageOnLeft ? (
                    <JourneyCard experience={experience} index={index} />
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mx-auto max-w-[360px] bg-white p-3 pb-12 rounded-xl shadow-2xl rotate-2"
                    >
                      <div className="relative h-[260px] w-full overflow-hidden rounded-lg bg-neutral-100">
                        <Image
                          src={experience.image}
                          alt={experience.title}
                          fill
                          className="object-cover"
                          style={{
                            objectPosition: experience.objectPosition,
                          }}
                          sizes="360px"
                        />
                      </div>

                      <p className="mt-4 text-center font-handwriting text-2xl text-neutral-800">
                        {experience.caption}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.article>
            );
          })}

          {/* Desktop Next Stop */}
          <motion.article
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative grid grid-cols-[1fr_90px_1fr] items-center gap-8"
          >
            <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf7] border border-green-700/30 shadow-md">
              <div className="h-4 w-4 rounded-full bg-green-700" />
            </div>

            <div />

            <div />

            <div className="rounded-3xl bg-[#77001E] text-white shadow-2xl p-8 rotate-1">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                next stop
              </p>

              <h2 className="mt-4 font-playfair text-5xl font-bold leading-tight">
                More building.
                <br />
                More learning.
              </h2>

              <p className="mt-5 font-mono text-sm leading-relaxed text-white/85">
                I’m continuing to grow as a developer, mentor, and leader —
                building projects that feel thoughtful, useful, and real.
              </p>

              <ul className="mt-6 space-y-2 font-mono text-sm">
                {nextSteps.map((step) => (
                  <li key={step} className="flex gap-2">
                    <span>→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}

function JourneyCard({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`rounded-3xl bg-white border border-red-100 shadow-xl p-7 ${
        index % 2 === 0 ? "rotate-1" : "-rotate-1"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-700">
        {experience.date}
      </p>

      <h2 className="mt-4 text-4xl font-playfair font-bold text-neutral-900">
        {experience.title}
      </h2>

      <p className="mt-1 font-handwriting text-3xl text-[#77001E]">
        {experience.company}
      </p>

      <ul className="mt-6 space-y-2 font-mono text-sm leading-relaxed text-neutral-700">
        {experience.description.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-[#77001E]">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl bg-[#fffaf7] border border-red-100 p-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#77001E]">
          what it taught me
        </p>

        <p className="mt-2 font-mono text-sm leading-relaxed text-amber-950">
          {experience.lesson}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#fffaf7] py-24 md:py-32"
    >
      <SectionHeader />
      <MobileJourney />
      <DesktopJourney />
    </section>
  );
}