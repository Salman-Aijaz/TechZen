"use client";

import React from "react";
import AboutUs from "../components/AboutUs";
import AboutHero from "../components/AboutHero";
import WhyChooseUs from "../components/WhyChooseUs";

export default function About() {
  return (
    <div className="bg-gray-50">
      <AboutHero/>
      <AboutUs/>
      <WhyChooseUs/>
    </div>
  );
}
