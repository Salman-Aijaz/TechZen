"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Quiz from "../assets/Quiz.jpg"
import Ecommerce from "../assets/e commerce.png"
import Gallery from "../assets/gallery.png"
import Link from "next/link";


const projects = [
  {
    name: "QuizNex",
    description:
    "Quiz App with React.js, Tailwind CSS, Neon DB and Express.js. Teachers upload questions; students take quizzes. Cheat-proof with disabled shortcuts."    
    ,tags: [
      "React",
      "Tailwind",
      "Javascript",
      "Express.JS",
      "Neon Db",
      "Node JS",
      "JWT",
    ],
    pic: Quiz,
    link:"https://quizzical-keen.vercel.app/"
  },
  {
    name: "Sk-Store",
    description:
      "E-commerce platform with React, Node.js, featuring an admin panel for adding and managing products, with real-time data handling using MongoDB and Express.js",
    tags: [
      "React",
      "Javascript",
      "Node JS",
      "Mongo Db",
      "Express JS",
    ],
    pic: Ecommerce,
    link:"https://sk-store.vercel.app/"
  },
  {
    name: "Pixel Place",
    description:
      "A beautifully crafted gallery app built with Next.js,Tailwind CSS, showcasing elegant UI designs with Shadcn UI for a seamless visual experience.",
    tags: ["Typescript", "Next.js", "Tailwind","Shadcn UI"],
    pic: Gallery,
    link:"https://pixelsplace.vercel.app/"
  },
];

export default function Projects() {
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
      <div ref={ref} className="w-full max-w-4xl px-4 pb-20">
      <h2 className="text-5xl font-bold my-6 text-center">Our Projects</h2>
      <p className='mb-4 text-gray-600 text-center'>Discover the innovation and meticulous craftsmanship that define every project we create.</p>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
          >
            <Link href={project.link} target="_blank" >
            <section className="bg-gray-50 w-full max-w-[42rem] mx-auto border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {project.description}
                </p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={project.pic}
                alt={project.name}
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
