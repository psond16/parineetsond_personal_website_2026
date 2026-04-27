"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tags = ["CS @ UIC", "Frontend Dev", "Mentor", "Creative Coder"];

const currentlyBuilding = [
    "web dev mentoring",
    "CodePath learner",
    "english conversational volunteer",
];

export default function About() {
  return (
    <section id="about" className="w-full overflow-hidden bg-[#fffaf7]">
      {/* ================= MOBILE ABOUT SECTION ================= */}
      <div className="md:hidden min-h-screen px-6 py-16">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-green-700 uppercase tracking-[0.35em]"
        >
          a little 
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-6xl font-bold font-mono text-red-800 uppercase tracking-tighter leading-[0.9]"
        >
          About
          <br />
          Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 font-handwriting text-4xl text-neutral-800"
        >
          Hi, I’m Parineet.
        </motion.p>

        {/* ONE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          whileTap={{ scale: 0.98, rotate: 0 }}
          className="relative mx-auto mt-8 w-[260px] h-[350px] bg-white p-3 pb-10 rounded-xl shadow-2xl"
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/aboutMe3.png"
              alt="picture of Parineet"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              sizes="260px"
            />
          </div>

          <p className="absolute bottom-2 left-0 right-0 text-center font-handwriting text-xl text-neutral-800">
            building + becoming
          </p>
        </motion.div>

        {/* TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 bg-white rounded-3xl shadow-xl border border-red-100 p-6"
        >
          <p className="font-mono text-sm text-amber-950 leading-relaxed">
            I’m a Computer Science and Honors student at UIC who loves building
            digital experiences that feel thoughtful, useful, and personal. I
            enjoy working at the intersection of frontend development, design,
            mentoring, and storytelling through code.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <p className="font-handwriting text-3xl text-neutral-800">
              Currently building:
            </p>

            <ul className="mt-3 space-y-2 font-mono text-sm text-amber-950">
              {currentlyBuilding.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-800">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ================= DESKTOP / TABLET ABOUT SECTION ================= */}
      <div className="hidden md:grid min-h-screen grid-cols-2 items-center gap-12 px-12 lg:px-24 py-24">
        {/* LEFT SIDE */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-green-700 uppercase tracking-[0.35em]"
          >
            a little
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-4 text-[110px] lg:text-[130px] font-bold font-mono text-red-800 uppercase tracking-tighter leading-[0.85]"
          >
            About
            <br />
            Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 font-handwriting text-5xl text-neutral-800"
          >
            Hi, I’m Parineet.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl font-mono text-base text-amber-950 leading-relaxed"
          >
            I’m a Computer Science and Honors student at UIC who loves building
            digital experiences that feel thoughtful, useful, and personal. I
            like combining design and code to create interfaces that are clean,
            playful, and easy to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white border border-red-100 shadow-sm text-red-800 text-sm font-mono"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <p className="font-handwriting text-4xl text-neutral-800">
              Currently building:
            </p>

            <ul className="mt-4 space-y-2 font-mono text-sm text-amber-950">
              {currentlyBuilding.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-800">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >

          {/* One main photo */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: -2 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-[340px] lg:w-[390px] h-[500px] bg-white p-4 pb-14 rounded-2xl shadow-2xl rotate-3"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src="/aboutMe3.png"
                alt="picture of Parineet"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                sizes="390px"
              />
            </div>

            <p className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-3xl text-neutral-800">
              building + becoming
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}