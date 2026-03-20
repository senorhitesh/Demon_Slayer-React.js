import React, { createContext, useEffect, useRef, useState } from "react";
import { motion, spring } from "framer-motion";

const Card = ({ activeName, setactiveName }) => {
  const cards = [
    {
      id: 1,
      name: "Tanjiro Kamado",
      firstName: "Tanjiro",
      description:
        "A kind-hearted and resilient young man from a humble background who becomes a Demon Slayer after his family is slaughtered by demons",
      image:
        "https://i.pinimg.com/1200x/a2/e1/7e/a2e17ee9f6cb51d08ea1310b620bf836.jpg",
      className: "bg-green-600",
      config: {
        x: -180,
        y: -20,
        rotate: -10,
        zIndex: 1,
        onLeft: 100,
      },
    },
    {
      id: 2,
      name: "Zenitsu Agatsuma",
      firstName: "Zenitsu",
      description:
        "Zenitsu known for his extreme cowardice and anxiety, which contrast sharply with his hidden strength and bravery",
      image:
        "https://i.pinimg.com/736x/42/31/06/423106cd3b184f5b9d3d7edbab1f76d9.jpg",

      className: "bg-yellow-300",
      config: {
        x: 70,
        y: -30,
        rotate: 8,
        zIndex: 1,
      },
    },
    {
      id: 3,
      name: "Inosuke Hashibira",
      firstName: "Inosuke",
      description:
        "Inosuke known for his wild, aggressive personality and unmatched combat prowess.",
      tag: "Venusaur",
      image:
        "https://i.pinimg.com/736x/20/e1/17/20e117778e0aec6f3b5a7191d0a5b462.jpg",

      className: "bg-[#EFB794]",
      config: {
        x: 350,
        y: -30,
        rotate: -3,
        zIndex: 1,
      },
    },
  ];

  return (
    <div className=" w-90 bg-emerald-500 mt-15  flex  relative">
      {cards.map((card, index) => {
        return (
          <motion.div key={card.id} className={`${card.className}`}>
            <motion.button
              onMouseEnter={() => {
                setactiveName(card.firstName.toUpperCase());
              }}
              whileHover={{
                scale: 1.2,
                rotate: 0,
                zIndex: 11,
                x: card?.onLeft || 0,
              }}
              whileTap={{
                scale: 0.99,
              }}
              initial={{
                x: 0,
                y: 100,
                scale: 0,
                zIndex: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: card.config.y,
                x: card.config.x,
                rotate: card.config.rotate,
                scale: 1,
                width: 320,
                height: 400,
                filter: "blur(0px)",
                zIndex: 0,
              }}
              transition={{
                type: spring,
                duration: 0.9,
                //   stiffness: 100,
                //   damping: 10
              }}
              className={`w-80 p-3 rounded-2xl  absolute inset-0 flex flex-col justify-between items-start overflow-hidden , ${card.className}`}
            >
              <div>
                <img className="rounded-sm" src={card.image} alt={card.id} />
                <motion.h2
                  style={{ fontFamily: "Dm Sans" }}
                  className="font-bold text-xl text mt-2"
                >
                  {" "}
                  {card.name}
                </motion.h2>
              </div>
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Card;
