"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Salman from "../../../public/muhammad salman.jpeg";
import Sufiyan from "../../../public/muhammad sufiyan.jpeg";
import Hasan from "../../../public/muhammad hasan.jpeg";
import Zaeem from "../../../public/muhammad zaeem.jpg";

const team = [
  {
    name: "M.Salman",
    description:
    "M. Salman is a full stack developer skilled in Django, Node.js, and React."    
    ,tags: [
      "React",
      "Tailwind",
      "Typescript",
      "Next.js",
      "Mongo Db",
      "Node JS",
      "Python",
      "Django",
      "Flask",
    ],
    pic: Salman,
  },
  {
    name: "M.Sufiyan",
    description:
      "M.Sufiyan is a full stack developer skilled in Node.js ,Next Js and React.",
    tags: [
      "React",
      "Tailwind",
      "Typescript",
      "Next.js",
      "Mongo Db",
      "Node JS",
      "Python",
      "Fast Api",
      "Postgres Sql",
    ],
    pic: Sufiyan,
  },
  {
    name: "M.Hasan",
    description:
      "Muhammad Hasan is a frontend developer skilled in React, Next.js, and Tailwind CSS, with expertise in crafting beautiful UIs using Shadcn UI, Material UI",
    tags: ["React", "Tailwind", "Typescript", "Next.js"],
    pic: Hasan,
  },
  {
    name: "M.Zaeem",
    description:"Muhammad Zaeem is a frontend developer skilled in React, Next.js, Tailwind CSS, and PHP, known for crafting elegant, responsive UIs."
    ,tags: ["React", "Tailwind", "Typescript", "Next.js","PHP"],
    pic: Zaeem,
  },
];

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const scrollProgress = Math.min(
          Math.max((window.innerHeight - rect.top) / window.innerHeight, 0),
          1
        );
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 0.8 + scrollY * 0.2;
  const opacity = 0.6 + scrollY * 0.4;

  return (
    <div className="flex justify-center items-center">
      <div ref={ref} className="w-full max-w-4xl px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
          >
            <section className="bg-gray-100 w-full max-w-[42rem] mx-auto border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {member.description}
                </p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {member.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={member.pic}
                alt={member.name}
                quality={95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                transition 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40"
              />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
