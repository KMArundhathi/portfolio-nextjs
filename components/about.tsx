"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Following my postgraduate studies in{" "}
        <span className="font-medium">Computer Application</span> at Kalam Technological University in 2020, I embarked on my developer journey at the Digital University Kerala's Center of Excellence,{" "}
        <span className="font-medium">Kerala Blockchain Academy, as a Research Fellow</span> in May 2022.{" "}
        During this time, I delved into blockchain technology and designed the website for the company's annual blockchain summit, BlockHash Live 2022, using HTML and CSS.I joined the Ethereum team to develop a front end for a land marketplace.I also created a multi-user dashboard for <span className="italic">SEC Kerala </span>and a comprehensive web app for managing everything before and after an election.

      </p>
      <p>
        <span className="italic">Continuing my growth, </span> I transitioned to a new role as a <span className="font-medium">Research and Development Engineer at KBA</span> in September 2023.
        Here, I developed <span className="font-medium"> Certichain </span>, a dashboard leveraging <span className="italic"> blockchain technology </span> for a tamper-proof certification process for academic institutions.{" "} Additionally, I built a UI portal for verifying the authenticity of certificates.
      </p>

      <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Material UI,Tailwind Css
        </span>
        . I am also familiar with HTML and CSS. I always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front end
        developer.
      </p>
    </motion.section>
  );
}
