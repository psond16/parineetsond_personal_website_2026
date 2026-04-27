"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

type PolaroidCard = {
  src: string;
  alt: string;
  caption: string;
};

const initialCards: PolaroidCard[] = [
  {
    src: "/aboutMe1.png",
    alt: "picture of me",
    caption: "main character moment",
  },
  {
    src: "/sparkHacks.png",
    alt: "picture of me at SparkHacks",
    caption: "hackathon era",
  },
  {
    src: "/motorola.png",
    alt: "picture of me at Motorola",
    caption: "tech girl things",
  },
  {
    src: "/mentor.png",
    alt: "mentor slide",
    caption: "dev mentor",
  },
  {
    src: "/CU1.png",
    alt: "Credit Union 1 Arena",
    caption: "student usher",
  },
  {
    src: "/cars.png",
    alt: "cars event in Chicago",
    caption: "chicago moments",
  },
  {
    src: "/shatterMe.png",
    alt: "favorite book",
    caption: "favorite read",
  },
  {
    src: "/sweaterWeather.png",
    alt: "favorite song",
    caption: "favorite song",
  },
];

const stackStyles = [
  {
    rotate: 0,
    x: 0,
    y: 0,
    scale: 1,
  },
  {
    rotate: -5,
    x: -8,
    y: 12,
    scale: 0.95,
  },
  {
    rotate: 5,
    x: 8,
    y: 24,
    scale: 0.9,
  },
];

export default function MobilePolaroidStack() {
  const [cards, setCards] = useState(initialCards);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right">(
    "right"
  );

  function sendTopCardToBack(direction: "left" | "right") {
    setSwipeDirection(direction);

    setCards((prevCards) => {
      const firstCard = prevCards[0];
      const remainingCards = prevCards.slice(1);

      return [...remainingCards, firstCard];
    });
  }

  function handleDragEnd(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance > 90 || swipeVelocity > 500) {
      sendTopCardToBack("right");
    } else if (swipeDistance < -90 || swipeVelocity < -500) {
      sendTopCardToBack("left");
    }
  }

  const visibleCards = cards.slice(0, 3);

  return (
    <section className="md:hidden min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-600 tracking-wide leading-tight">
          Student. Mentor.
          <br />
          Developer. Engineer.
        </h1>

        <p className="mt-5 text-sm text-green-700 font-mono max-w-xs mx-auto leading-relaxed">
          I build digital experiences that bridge creative design and clean,
          functional code.
        </p>
      </div>

      <div className="relative w-[310px] h-[430px]">
        <AnimatePresence initial={false}>
          {visibleCards.map((card, index) => {
            const isTopCard = index === 0;
            const style = stackStyles[index];

            return (
              <motion.div
                key={card.src}
                className="absolute inset-0 bg-white p-3 pb-8 rounded-md shadow-2xl cursor-grab active:cursor-grabbing"
                style={{
                  zIndex: 30 - index,
                }}
                animate={{
                  x: style.x,
                  y: style.y,
                  rotate: style.rotate,
                  scale: style.scale,
                }}
                exit={{
                  x: swipeDirection === "left" ? -450 : 450,
                  rotate: swipeDirection === "left" ? -22 : 22,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                drag={isTopCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={isTopCard ? handleDragEnd : undefined}
              >
                <div className="relative w-full h-[300px] overflow-hidden rounded-sm bg-neutral-100">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="310px"
                    priority={index === 0}
                  />
                </div>

                <p className="pt-5 text-center font-handwriting text-2xl text-neutral-800">
                  {card.caption}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <button
          type="button"
          onClick={() => sendTopCardToBack("left")}
          className="w-12 h-12 rounded-full border border-neutral-400 text-xl shadow-sm active:scale-95 transition"
        >
          ←
        </button>

        <p className="text-xs text-neutral-500 font-mono">
          swipe left or right
        </p>

        <button
          type="button"
          onClick={() => sendTopCardToBack("right")}
          className="w-12 h-12 rounded-full border border-neutral-400 text-xl shadow-sm active:scale-95 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}