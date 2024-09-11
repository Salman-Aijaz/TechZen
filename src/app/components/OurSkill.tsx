"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import html from "../assets/HTML.svg";
import css from "../assets/CSS.svg";
import js from "../assets/JS.svg";
import ts from "../assets/TS.svg";
import github from "../assets/GITHUB.svg";
import git from "../assets/GIT.svg";
import graphql from "../assets/GRAPHQL.svg";
import nextjs from "../assets/NEXT.svg";
import postgresql from "../assets/POSTGRES SQL.svg";
import python from "../assets/PYTHON.svg";
import react from "../assets/REACT.svg";
import tailwindcss from "../assets/TAILWIND.svg";
import sanity from "../assets/SANITY.svg";
import Redux from "../assets/redux.png";
import Fastapi from "../assets/fast.png";
import django from "../assets/django.png";
import mongodb from "../assets/mongo.png";
import node from "../assets/node.png";
import AOS from 'aos'
import 'aos/dist/aos.css';


interface SkillInfo {
  icons?: JSX.Element[];
}

interface AboutData {
  title: string;
  info: SkillInfo[];
}

const aboutData: AboutData[] = [
  {
    title: "Frontend",
    info: [
      {
        icons: [
          <Image key="html" src={html} width={50} height={50} alt="HTML" />,
          <Image key="css" src={css} width={50} height={50} alt="CSS" />,
          <Image key="js" src={js} width={50} height={50} alt="JavaScript" />,
          <Image key="ts" src={ts} width={50} height={50} alt="TypeScript" />,
          <Image
            key="nextjs"
            src={nextjs}
            width={50}
            height={50}
            alt="Next.js"
          />,
          <Image key="react" src={react} width={50} height={50} alt="React" />,
          <Image
            key="tailwind"
            src={tailwindcss}
            width={50}
            height={50}
            alt="Tailwind CSS"
          />,
        ],
      },
    ],
  },
  {
    title: "Backend",
    info: [
      {
        icons: [
          <Image
            key="python"
            src={python}
            width={50}
            height={50}
            alt="Python"
          />,
          <Image
            key="django"
            src={django}
            width={50}
            height={50}
            alt="Django"
          />,
          <Image
            key="Fastapi"
            src={Fastapi}
            width={50}
            height={50}
            alt="Fast"
          />,
          <Image key="node" src={node} width={50} height={50} alt="Node" />,
        ],
      },
    ],
  },
  {
    title: "Databsase",
    info: [
      {
        icons: [
          <Image
            key="postgresql"
            src={postgresql}
            width={50}
            height={50}
            alt="PostgreSQL"
          />,
          <Image
            key="mongodb"
            src={mongodb}
            width={50}
            height={50}
            alt="Mongodb"
          />,
        ],
      },
    ],
  },
  {
    title: "Other",
    info: [
      {
        icons: [
          <Image
            key="sanity"
            src={sanity}
            width={50}
            height={50}
            alt="Sanity"
          />,
          <Image
            key="graphql"
            src={graphql}
            width={50}
            height={50}
            alt="GraphQL"
          />,
          <Image
            key="github"
            src={github}
            width={50}
            height={50}
            alt="Github"
          />,
          <Image key="git" src={git} width={50} height={50} alt="Git" />,
          <Image key="redux" src={Redux} width={50} height={50} alt="Redux" />,
        ],
      },
    ],
  },
];

const OurSkill: React.FC = () => {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);
  return (
    <>
      <h2 className="text-5xl font-bold py-6 text-center">Our Skills</h2>
      <p className="text-gray-600 my-2 text-center px-4 sm:px-0">
        Unlock innovation and quality through our expertise in crafting tailored
        digital solutions.
      </p>
      <div className="h-full bg-primary/30 px-4 sm:px-0 py-20 text-center xl:text-left">
        <div data-aos="fade-down-right" className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className="flex-1 flex-col justify-center">
            <h2 className="text-3xl xl:mx-0 mb-4 xl:mb-3 px-2 xl:px-0">
              TechZen: Exceptional Web, Mobile App, and Graphic Design Solutions
              🚀✨
            </h2>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-4 px-2 xl:px-0">
              At TechZen, we excel in developing dynamic web applications with a
              focus on the MERN stack, MongoDB, Express, React, and Node.js. Our
              backend capabilities extend to Django, FastAPI, and Express, while
              React drives our frontend solutions. Leveraging
              MongoDB,PostgresSQL for robust data management, we ensure seamless
              integration and superior performance in every project. Partner
              with us to bring your vision to life with cutting-edge technology
              and expertise.
            </p>
          </div>
          {/* Info */}
          <div className="flex-col w-full xl:max-w-[48%] flex">
            <div className="flex gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex
                      ? "text-accent after:w-[100%] text-sm after:bg-accent after:transition-all after:duration-300"
                      : ""
                  } 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-blue-400 after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row text-[15px] xl:text-lg max-w-max gap-x-2 items-center text-gray-600"
                >
                  <div className="hidden md:flex"></div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex}>{icon}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSkill;
