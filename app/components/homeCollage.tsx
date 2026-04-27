import Image from "next/image";
import type { ReactNode } from "react";
import MobilePolaroidStack from "./mobilePolaroidStack";

function Tile({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[1.5rem] ${className}`}>
      {children}
    </div>
  );
}

export default function HomeCollage() {
  return (
    <>
      {/* MOBILE VERSION — unchanged */}
      <MobilePolaroidStack />

      {/* DESKTOP / TABLET VERSION */}
      <section className="hidden md:block w-full overflow-hidden bg-white">
        <div className="mx-auto max-w-[1550px] px-4 lg:px-6">
          <div className="h-[calc(100vh-7rem)] min-h-[820px] w-full py-4">
            <div className="grid h-full w-full grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] gap-3">
              {/* ================= TITLE TILE ================= */}
              <Tile className="col-start-1 col-span-5 row-start-1 row-span-4 bg-[#fffaf7] p-7 lg:p-8 flex flex-col justify-start">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-green-700">
                  portfolio 2026
                </p>

                <h1 className="mt-4 text-[2.7rem] leading-[0.92] tracking-tight text-yellow-600 font-bold lg:text-[3.3rem] xl:text-[3.9rem]">
                  Student.
                  <br />
                  Mentor.
                  <br />
                  Developer.
                  <br />
                  Engineer.
                </h1>
              </Tile>

              {/* ================= MAIN IMAGE ================= */}
              <Tile className="col-start-6 col-span-5 row-start-1 row-span-6 bg-neutral-100">
                <Image
                  src="/aboutMe1.png"
                  alt="picture of Parineet"
                  fill
                  priority
                  className="object-cover transition duration-500 hover:scale-105"
                  style={{ objectPosition: "center 25%" }}
                  sizes="35vw"
                />
              </Tile>

              {/* ================= MENTOR ================= */}
              <Tile className="col-start-11 col-span-6 row-start-1 row-span-2 bg-neutral-100">
                <Image
                  src="/mentor.png"
                  alt="mentor slide"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  style={{ objectPosition: "center center" }}
                  sizes="35vw"
                />
              </Tile>

              {/* ================= SPARKHACKS ================= */}
              <Tile className="col-start-1 col-span-3 row-start-5 row-span-4 bg-neutral-100">
                <Image
                  src="/sparkHacks.png"
                  alt="picture of me at SparkHacks"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  style={{ objectPosition: "center center" }}
                  sizes="20vw"
                />
              </Tile>

              {/* ================= WELCOME TILE ================= */}
              <Tile className="col-start-4 col-span-2 row-start-5 row-span-4 bg-[#77001E] p-5 flex items-center">
                <p className="font-handwriting text-[1.75rem] lg:text-[2rem] leading-tight text-white">
                  welcome to my little corner of the internet
                </p>
              </Tile>

              {/* ================= TAGS TILE ================= */}
              <Tile className="col-start-1 col-span-5 row-start-9 row-span-2 bg-[#fffaf7] px-5 py-4 flex flex-wrap gap-3 content-center">
                {["CS @ UIC", "Frontend Dev", "Mentor", "Creative Coder"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-4 py-2 font-mono text-sm text-[#77001E]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </Tile>

              {/* ================= CU1 ================= */}
              <Tile className="col-start-6 col-span-5 row-start-7 row-span-4 bg-neutral-100">
                <Image
                  src="/CU1.png"
                  alt="Credit Union 1 Arena"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  style={{ objectPosition: "center center" }}
                  sizes="32vw"
                />
              </Tile>

              {/* ================= MOTOROLA ================= */}
              <Tile className="col-start-11 col-span-3 row-start-3 row-span-5 bg-neutral-100">
                <Image
                  src="/motorola.png"
                  alt="picture of me at Motorola"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  style={{ objectPosition: "center top" }}
                  sizes="20vw"
                />
              </Tile>

              {/* ================= SONG ================= */}
              <Tile className="col-start-14 col-span-3 row-start-3 row-span-5 bg-neutral-100">
                <Image
                  src="/sweaterWeather.png"
                  alt="favorite song"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  style={{ objectPosition: "center center" }}
                  sizes="20vw"
                />
              </Tile>

              {/* ================= SMALL NOTE TILE ================= */}
              <Tile className="col-start-11 col-span-4 row-start-8 row-span-3 bg-[#fffaf7] px-5 py-5 flex items-center">
                <p className="font-handwriting text-[1.8rem] lg:text-[2.1rem] leading-tight text-[#77001E]">
                  building,
                  <br />
                  learning,
                  <br />
                  repeating.
                </p>
              </Tile>

              {/* ================= CHICAGO TILE ================= */}
              <Tile className="col-start-15 col-span-2 row-start-8 row-span-1 bg-green-700 px-4 py-3 flex items-center justify-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white text-center leading-none">
                  Chicago based
                </p>
              </Tile>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}